import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Hyperlink.module.css';
import { Children } from "react";

const Hyperlink  = ({children, url, name, desc}) => {
    return <>
        <div className={styles.hyperlinkwhole}>
            <h1 className={styles.hyperlinkname}><Link href = {url}>{name}</Link></h1>
            <p className={styles.hyperlinkdesc}>{desc}</p>
            { children }
        </div>
    </>;
}

export default Hyperlink;