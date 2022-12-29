
import styles from '../styles/main.module.css';
import Image from 'next/image'

const IMAGE_URL = 
    'https://t4.ftcdn.net/jpg/03/36/99/11/360_F_336991124_1ZjU91D3aZjk2OJmEaJAu4OrE3OKgXCY.jpg';

const Hero = () => {
    return <>
        <header className="container">
            <div id={styles.heroImgText}>
                <h1 role="title">Natick Commission on Disabilities</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>

            <Image 
                priority
                fill
                src = {IMAGE_URL}
                id = "heroImg" 
                alt = 'NCOD Hero Image'
            /> 
        </header>
    </>;
};

export default Hero;
/*

img
Header

*/
