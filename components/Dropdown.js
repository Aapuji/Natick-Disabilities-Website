import Link from 'next/link';
import styles from '../styles/Dropdown.module.css';
import utils from '../styles/utils.module.css';
import React, {useState} from 'react';


const Dropdown = () => {
  const [open, setOpen] = useState(false)
  return (
        <div className={styles.dropdown}>
            <div className={styles.dropdownbtn} onClick = {()=>{setOpen(!open)}}>
              Click for Resource Section + 
              <span className = "fas fa-caret-down" onClick = {()=>{setOpen(!open)}}></span>
            </div>

              <div className={`dropdowncontainer${open? 'active' : 'inactive'}`}>
                <div className={styles.dropdowncontent}>
                    <Link href = "/resources/federal"><div className={styles.dropdownitem}>Federal Resources</div></Link>
                    <Link href = "/resources/state"><div className={styles.dropdownitem}>Massachussetts Resources</div></Link>
                    <Link href = "/resources/natick"><div className={styles.dropdownitem}>Natick Resources</div></Link>
                    <Link href = "/resources/local"><div className={styles.dropdownitem}>Other Local Resources</div></Link>
                    <Link href = "/resources/veteran"><div className={styles.dropdownitem}>Veteran Resources</div></Link>
                    <Link href = "/resources/student"><div className={styles.dropdownitem}>Student Resources</div></Link>
                </div>
              </div>
        </div>
  );
};

export default Dropdown;