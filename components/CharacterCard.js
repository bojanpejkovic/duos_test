import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Loading from "./Loading";
import Error from "./Error";
import Image from "next/image";
import styles from "../styles/Character.module.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ONE_EPISODE = gql`
    query oneCharacter($chid: ID!){
        character(id: $chid) {
            id
            name
            image
            location{
                name
            }
        }
    }
`;

export default function CharacterCard({ chid }){
    const dispatch = useDispatch();
    const { data, error } = useQuery(ONE_EPISODE, { variables:{ chid: chid }});
    useEffect(()=>{
        if(!data){ 
            dispatch({ type: 'navigation/reset', payload:{type:"character" }});
            return;
        }
        dispatch({ type: 'navigation/setCharacter', payload:{chid:chid, name:data.character.name }});
    }, [data]);


    return (
        (!data)? <Loading /> :
        (error)? <Error error={error} /> :
        <div className={styles.characterCard}>
            <h3>{data.character.name}</h3>
            <Image
                src={data.character.image}
                alt={data.character.name}
                width={300}
                height={300}
            />
            <p>Last known location:</p><p>{data.character.location.name}</p>
        </div>
    )
}