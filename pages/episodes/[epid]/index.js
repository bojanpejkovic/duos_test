import Head from "next/head";
import Episode from "../../../components/Episode";
import { useRouter } from 'next/router'
// import styles from '../../../styles'


export default function Home() {
    const router = useRouter();
    const { epid } = router.query;

    //eventualno ucitavanje
    
    return (
        <div>
        <Head>
            <title>Rick &amp; Morty Episode details</title>
        </Head>

        <main>
            <Episode epid={epid} />
        </main>
        </div>
    );
}
