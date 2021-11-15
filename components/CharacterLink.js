import Link  from 'next/link';

export default function CharacterLink({ data }){
    // return 

    return (
        <span className="link">
            <Link href={{
            pathname: '/characters/[chid]',
            query: { chid: data.id },
        }}>{data.name}</Link>
        </span>
    )
}