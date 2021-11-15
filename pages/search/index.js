import { useEffect, useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import styles from '../../styles/Search.module.css';
import NoResults from "../../components/NoResults";

const EPISODES_LIST_SEARCH = gql`
  query Episodes($search: String){
    episodes(filter: { name: $search }){
        info {
            count
        }
        results {
            id
            name
            air_date
        }
    }
  }
`;
const CHARACTER_LIST_SEARCH = gql`
    query Characters($search: String){
        characters( filter: { name: $search }) {
        info {
            count
        }
        results {
            id
            name
        }
        }
    }
`;

export default function Search(){
    const [episodeString, setEpisodeString] = useState('');
    const [characterString, setCharacterString] = useState('');

    const { ...characterQuery } = useQuery(CHARACTER_LIST_SEARCH, {variables:{search:""}});
    const { ...episodeQuery } = useQuery(EPISODES_LIST_SEARCH, {variables:{search:""}});

    useEffect(()=>{
        let str = episodeString.split(" ").join();
        episodeQuery.refetch({ search:str});
    }, [episodeString]);

    useEffect(()=>{
        let str = characterString.split(" ").join();
        characterQuery.refetch({ search:str});
    }, [characterString]);

    return (
        <div className={styles.grid_2_columns}>
            <p>Search episodes<input onChange={(e)=>setEpisodeString(e.target.value)}  value={episodeString} /></p>
            <p>Search characters<input onChange={(e)=>setCharacterString(e.target.value)} value={characterString} /></p>
            {((characterQuery.data && characterQuery.data.characters.info.count > 0) || (episodeQuery.data && episodeQuery.data.episodes.info.count > 0))?
            <>
            <div>
                {
                (episodeQuery.loading)? <Loading /> :
                (episodeQuery.error)? <Error error={episodeQuery.error} /> :
                (episodeQuery.data && episodeQuery.data.episodes.info.count > 0)?
                    <div>
                        <p>EPISODES: {episodeQuery.data.episodes.info.count}</p>
                        {episodeQuery.data.episodes.results.map((ep) => <p>{ep.name}</p> )}
                    </div>
                    : ""
                }
            </div>
            <div>
                {
                (characterQuery.loading)? <Loading /> :
                (characterQuery.error)? <Error error={characterQuery.error} /> :
                (characterQuery.data && characterQuery.data.characters.info.count > 0)?
                    <div>
                        <p>CHARACTERS: {characterQuery.data.characters.info.count}</p>
                        {characterQuery.data.characters.results.map((ep) => <p>{ep.name}</p> )}
                    </div>
                    : 
                    ""
                }
            </div>
            </>
            :
            <NoResults />}
        </div> 
    )
}