import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Hyperlink.module.css';
import { Children } from "react";

const Hyperlink = ({ url, name, children }) => {
    return <>
        <div className={styles.hyperlinkwhole}>
            <h1 className={styles.hyperlinkname}><Link href = {url}>{name}</Link></h1>
            { children }
        </div>
    </>;
}

export default Hyperlink;