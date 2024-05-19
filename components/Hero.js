import Image from 'next/image';
import Navbar from './Navbar';
import styles from '../styles/Hero.module.css';
import utils from '../styles/utils.module.css';
import bgImg from '../public/bg.jpg';
import bgBackup from '../public/bgbackup.jpg';

const Hero = ({ title, altText, img }) => {
  return <>
    <header className={`${utils.flexBase} ${styles.heroHeader}`}>
      <Navbar />
        <div className={styles.wrapper}>
          <Image
            className={utils.back}
            priority
            fill
            src={img ?? bgImg}
            id={styles.heroImg}
            alt={altText}
            style={{border: 'yellow solid 0px'}}
          /> 
          <div id={styles.heroImgText}>
            <h1 className={utils.center} id = {styles.headerText} role="title">{title}</h1>
          </div>
        </div>
    </header>
  </>;
};

export default Hero;
