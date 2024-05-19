import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Card.module.css';
import { WiTime3 } from 'react-icons/wi';
import { FcCalendar } from 'react-icons/fc';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Card  = ({ title, location, date, time, desc, whenClick }) => {

    // function handleClick() {
    //     console.log('increment like count');
    // }

    return <>
        <div className={styles.card} onClick={whenClick}>
            <div className = {styles.cardcontent}>
                <h1>{title}</h1>
                <h4 className={styles.info}>
                    <span className={styles.calendarIcon}><FcCalendar alt="Date of event"/></span>
                    <span className={styles.infoDescriptor}> {date}</span>
                </h4>
                <h4 className={styles.info}>
                    <span className={styles.clockIcon}><WiTime3 alt="Time of event"/></span>
                    <span className={styles.infoDescriptor}> {time} <span className={styles.est}>EST</span></span>
                </h4>
                <h4 className={styles.info}>
                    <span className={styles.markerIcon}><FaMapMarkerAlt alt="Location of event" /></span> 
                    <span className={styles.infoDescriptor}>{location}</span>
                </h4>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    </>;
}

export default Card;