
import styles from '../styles/main.module.css';
import Image from 'next/image';
import bgImg from '../public/bg.jpg';

const Hero = () => {
    return <>
        <header className="container">
            <div id={styles.heroImgText}>
                <h1 role="title">Natick Commission on Disabilities</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>

            <Image
                fill 
                src = {bgImg}
                id = "heroImg" 
                alt = '/'
            /> 
        </header>
    </>;
};

export default Hero;
/*

img
Header

*/
