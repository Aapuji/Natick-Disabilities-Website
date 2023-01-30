import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Card.module.css';

const Card  = ({name, location, time, about}) => {
    return <>
        <div className={styles.card}>
            <div className = {styles.cardcontent}>
                <h1>{name}</h1>
                <h4>Date and Time: {time}</h4>
                <h4>Location: {location}</h4>
                <p>About This Event: {about}</p>
            </div>
        </div>
    </>;
}

export default Card;