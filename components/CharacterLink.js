import Link  from 'next/link';

export default function CharacterLink({ data }){
    // return 

    return (
        <Link href={{
            pathname: '/characters/[chid]',
            query: { chid: data.id },
        }}>{data.name}</Link>
    )
}