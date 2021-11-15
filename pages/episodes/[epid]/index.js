import Head from "next/head";
import Episode from "../../../components/Episode";
import { useRouter } from 'next/router'
import Breadcrumbs from '../../../components/Breadcrumbs';


export default function Home() {
    const router = useRouter();
    const { epid } = router.query;
    
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
