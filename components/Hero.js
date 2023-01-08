import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import utils from '../styles/utils.module.css';
import bgImg from '../public/bg.jpg';

const Hero = () => {
  return <>
    <header className={`container ${styles.heroHeader}`}>
      <Image
        className={utils.back}
        fill
        // src={bgImg}
        id={styles.heroImg}
        alt='/'
        style={{border: 'yellow solid 0px'}}
      /> 
      <div id={styles.heroImgText}>
        <h1 className={utils.center} role="title">Natick Commission on Disabilities</h1>
      </div>
    </header>
  </>;
};

export default Hero;
