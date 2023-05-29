import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Profile.module.css';
import { WiTime3 } from 'react-icons/wi';
import { FcCalendar } from 'react-icons/fc';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Profile = ({ heading, desc, url, flipped = false }) => {
    return <div className={styles.container}>
        {
            flipped ? 
                <>
                    <Image
                        src={url}
                        alt={`Picture of ${ heading }`}
                        width={200} 
                        height={200}
                        className={`${styles.img} ${styles.imgFlipped}`}
                    />
                    <div className={styles.content}>
                        <h2 className={styles.name}>{heading}</h2>
                        <p className={styles.desc}>{desc}</p>
                    </div>
                </> 
            :
                <>
                    <div className={styles.content}>
                        <h2 className={styles.name}>{heading}</h2>
                        <p className={styles.desc}>{desc}</p>
                    </div>
                    <Image
                        src={url}
                        alt={`Picture of ${ heading }`}
                        width={200} 
                        height={200}
                        className={`${styles.img} ${styles.imgNormal}`}
                    />
                </>
        }
    </div>;
}

export default Profile;