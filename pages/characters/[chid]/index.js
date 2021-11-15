import Head from "next/head";
import { useRouter } from 'next/router'


export default function Home() {
    const router = useRouter();
    const { chid } = router.query;

    //eventualno ucitavanje
    
    return (
        <div>
        <Head>
            <title>Character detail: </title>
        </Head>

        <main>
            <p>Character ID: {chid}</p>
        </main>
        </div>
    );
}
