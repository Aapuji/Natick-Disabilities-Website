import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Profile.module.css';
import { WiTime3 } from 'react-icons/wi';
import { FcCalendar } from 'react-icons/fc';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Profile = ({ name, position, desc, url, flipped = false }) => {
    return <div className={styles.container}>
        {
            flipped ? 
                <>
                    <Image
                        src={url}
                        alt={`Picture of ${ name }`}
                        width={200} 
                        height={200}
                        className={`${styles.img} ${styles.imgFlipped}`}
                    />
                    <div className={styles.content}>
                        <h2 className={styles.name}>{name}</h2>
                        <h4 className={styles.position}>{position.toUpperCase()}</h4>
                        <p className={styles.desc}>{desc}</p>
                    </div>
                </> 
            :
                <>
                    <div className={styles.content}>
                        <h2 className={styles.name}>{name}</h2>
                        <h4 className={styles.position}>{position.toUpperCase()}</h4>
                        <p className={styles.desc}>{desc}</p>
                    </div>
                    <Image
                        src={url}
                        alt={`Picture of ${ name }`}
                        width={200} 
                        height={200}
                        className={`${styles.img} ${styles.imgNormal}`}
                    />
                </>
        }
    </div>;
}

export default Profile;