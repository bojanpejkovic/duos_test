import Head from "next/head";
import { useRouter } from 'next/router'
import CharacterCard from "../../../components/CharacterCard";
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function Home() {
    const router = useRouter();
    const { chid } = router.query;

    //eventualno ucitavanje
    
    return (
        <div>
        <Head>
            <title>Character detail: </title>
        </Head>
        <Breadcrumbs />

        <main>
            <CharacterCard chid={chid} />
        </main>
        </div>
    );
}
