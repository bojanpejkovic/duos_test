import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Loading from "./Loading";
import Error from "./Error";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const EPISODES_LIST = gql`
  query AllEpisodes {
    episodes {
      results {
        id
        name
        air_date
      }
    }
  }
`;

export default function Episodes() {
    const { data, error } = useQuery(EPISODES_LIST);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: 'navigation/reset', payload:{type:"all" }});
    }, [data])

    return (
        (!data)? <Loading /> :
        (error)? <Error error={error} /> :
        <div className="grid">
            {data.episodes.results.map((ep) => (
                <Card key={ep.id} ep={ep} />
            ))}
        </div>
    );
}
