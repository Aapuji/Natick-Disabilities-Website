import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Profile.module.css';
import { WiTime3 } from 'react-icons/wi';
import { FcCalendar } from 'react-icons/fc';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Profile = ({ name, desc, url }) => {
    return <>
        <div className={styles.verticalProfiles}>
            <h2 className={styles.aboveImage}>{ name }</h2>
            <Image
                src={url}
                alt={`Picture of ${ name }`}
                width={200} 
                height={200}
                className={styles.img}
            />
            <p className={styles.belowImage}>{ desc }</p>
        </div>
    </>;
}

export default Profile;