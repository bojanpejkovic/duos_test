import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Loading from "./Loading";
import Error from "./Error";
import CharacterLink from "./CharacterLink";

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
    const { data, error } = useQuery(ONE_EPISODE, { variables:{ epid: epid }});

    if (!data) return <Loading />
    if (error) return <Error error={error} />

    console.log(data);

    return (
        <>
        <h3>Episode:{data.episode.name}</h3>
        <ul>
            {data.episode.characters.map(character=>
                <li key={character.id}><CharacterLink data={character} /></li>
            )}
        </ul>
        </>
    )
}
