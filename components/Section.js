import Image from 'next/image';
import styles from '../styles/Section.module.css';
import homeStyles from '../styles/Home.module.css';
import utils from '../styles/utils.module.css';

const Section = ({ children, 
    id = '', 
    className = '', 
    style = {}, 
    imgName = '', 
    title = null, 
    subtitle = null, 
    imgStyle = {} 
}) => {
  return <>
    <section id={id} className={className} style={style}>
      <div className={`${homeStyles.sectionHeaderImg} ${utils.imgWrapper}`}>
        <Image
            //src = {bgImg} Will be like the header images in https://natickma.gov
            fill
            name={`${imgName} Section Image`} 
            alt='/'
            style={imgStyle}
        />
      </div>
      { title ? <h1 className={styles.header}>{title}</h1> : <></> }
      { subtitle ? <p className={styles.subheader}>{subtitle}</p> : <></>}
      {children}
    </section>
  
  </>;
};

export default Section;