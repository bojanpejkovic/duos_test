import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCharacter, getEpisode } from "./redux_store/navigationSlice";


export default function Breadcrumbs(){
    const initialLinks = [{link: "/", id:"", name:"Episodes"}];
    const episode = useSelector(getEpisode);
    const character = useSelector(getCharacter);
    const [links, setLinks] = useState(JSON.parse(JSON.stringify(initialLinks)));
    
    useEffect(()=>{
        console.log({episode, character});
        let new_links = JSON.parse(JSON.stringify(initialLinks));
        if(episode && episode.id>0) new_links.push({link:"/episodes/", id:episode.id, name: episode.name})
        if(character && character.id>0) new_links.push({link:"/characters/", id:character.id, name: character.name})
        setLinks(new_links);
        console.log("LINKS",new_links);
    }, [episode, character]);

    return (
        <p>
            {links.map((link, ind)=><span className="link" key={ind}>{(link.link!='/' && <span> / </span>)}<Link href={link.link+link.id}>{link.name}</Link></span>)}
        </p>
    )
}