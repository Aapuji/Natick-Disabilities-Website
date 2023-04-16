import Image from 'next/image';
import Navbar from './Navbar';
import styles from '../styles/Hero.module.css';
import utils from '../styles/utils.module.css';
import bgImg from '../public/bg.jpg';

const Hero = () => {
  return <>
    <header className={`container ${styles.heroHeader}`}>
      <Navbar />
      <Image
        className={utils.back}
        priority
        fill
        src={bgImg}
        id={styles.heroImg}
        alt='Background Hero Image for Header'
        style={{border: 'yellow solid 0px'}}
      /> 
      <div id={styles.heroImgText}>
        <h1 className={utils.center} role="title">Natick Commission on Disability</h1>
      </div>
    </header>
  </>;
};

export default Hero;
