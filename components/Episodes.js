import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Loading from "./Loading";
import Error from "./Error";
import Card from "./Card";

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

    if (!data) return <Loading />;
    if (error) return <Error error={error} />;

    console.log(data);

    return (
        <div className="grid">
            {data.episodes.results.map((ep) => (
                <Card key={ep.id} ep={ep} />
            ))}
        </div>
    );
}
