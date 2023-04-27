import Image from 'next/image';
import styles from '../styles/Section.module.css';
import homeStyles from '../styles/Home.module.css';
import utils from '../styles/utils.module.css';

const Section = ({ 
  children, 
  id = '', 
  className = '', 
  style = {}, 
  imgName = '', 
  title = null, 
  subtitle = null, 
  imgStyle = {} 
}) => {
  return <>
    <section id={id} className={`${styles.section} ${className}`} style={style}>
      <div className={`${styles.imageWrapper} ${utils.imgWrapper}`}>
        <Image
          src='/section-image.jpg' // Will be like the header images in https://natickma.gov
          // fill
          name={`${imgName} Introductory Banner`} 
          alt={`${imgName} Introductory Banner`}
          className={styles.image}
          width={97800}
          height={5300}
        />
      </div>
      { title ? <h1 className={styles.header}>{title}</h1> : <></> }
      { subtitle ? <p className={styles.subheader}>{subtitle}</p> : <></> }
      {children}
    </section>
  </>;
};

export default Section;