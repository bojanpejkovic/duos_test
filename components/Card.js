import styles from "../styles/Card.module.css";
import Link from 'next/link';

export default function Card({ ep }) {
  return <div className={styles.card}>
        <h3>{ep.name}</h3>
        <p>{ep.air_date}</p> 
        <Link href={{
              pathname: '/episodes/[epid]',
              query: { epid: ep.id },
            }}>See details...</Link>
  </div>;
}
