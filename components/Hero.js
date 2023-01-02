import Image from 'next/image';
import styles from '../styles/main.module.css';
import utils from '../styles/utils.module.css';
import heroStyles from '../styles/Hero.module.css';
import bgImg from '../public/bg.jpg';

const Hero = () => {
  return <>
    <header className={`container ${heroStyles.heroHeader}`}>
      <Image
        className={utils.back}
        fill 
        src = {bgImg}
        id = "heroImg" 
        alt = '/'
      /> 
      <div id={styles.heroImgText}>
        <h1 role="title">Natick Commission on Disabilities</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </header>
  </>;
};

export default Hero;
/*

img
Header

*/
