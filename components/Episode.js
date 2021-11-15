import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Loading from "./Loading";
import Error from "./Error";
import CharacterLink from "./CharacterLink";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ONE_EPISODE = gql`
    query oneEpisode($epid: ID!){
        episode(id: $epid) {
            id
            name
            characters{
                id 
                name
            }
        }
    }
`;

export default function Episode({ epid }) {
    const dispatch = useDispatch();
    const { data, error } = useQuery(ONE_EPISODE, { variables:{ epid: epid }});

    useEffect(()=>{
        if(!data){ 
            dispatch({ type: 'navigation/reset', payload:{type:"episode" }});
            return;
        }
        dispatch({ type: 'navigation/setEpisode', payload:{epid:epid, name:data.episode.name }});
    }, [data]);

    console.log(data);

    return (
        (!data)? <Loading /> :
        (error)? <Error error={error} /> :
        <>
            <h3>Episode:{data.episode.name}</h3>
            <ul>
                {data.episode.characters.map(character=>
                    <li key={character.id}><CharacterLink data={character} /></li>
                )}
            </ul>
        </>
    );
}
