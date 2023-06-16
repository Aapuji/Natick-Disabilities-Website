import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Card.module.css';
import { WiTime3 } from 'react-icons/wi';
import { FcCalendar } from 'react-icons/fc';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Card  = ({ name, location, date, time, desc, brief }) => {

    function handleClick() {
        console.log('increment like count');
    }

    return <>
        <div className={styles.card} onClick={handleClick}>
            <div className = {styles.cardcontent}>
                <h1>{name}</h1>
                <h4 className={styles.info}>
                    <span className={styles.icon}><FcCalendar alt="Date of event"/></span>
                    <span className={styles.infoDescriptor}> {date}</span>
                </h4>
                <h4 className={styles.info}>
                    <span className={styles.icon}><WiTime3 alt="Time of event"/></span>
                    <span className={styles.infoDescriptor}> {time} <span>EST</span></span>
                </h4>
                <h4 className={styles.info}>
                    <span className={styles.markerIcon}><FaMapMarkerAlt alt="Location of event" /></span> 
                    <span className={styles.infoDescriptor}> {location}</span>
                </h4>
                <p className={styles.desc}>{brief ?? desc}</p>
            </div>
        </div>
    </>;
}

export default Card;