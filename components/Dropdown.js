import Link from 'next/link';
import styles from '../styles/Dropdown.module.css';
import utils from '../styles/utils.module.css';
import React, {useState} from 'react';


const Dropdown = () => {
  const [open, setOpen] = useState(false)
  return (
        <div className={styles.dropdown}>
            <div className={styles.dropdownbtn} onClick = {()=>{setOpen(!open)}}>
              Choose Resource Category   ⬇ 
              <span className = "fas fa-caret-down" onClick = {()=>{setOpen(!open)}}></span>
            </div>

              <div className={`dropdowncontainer  ${open? 'active' : 'inactive'}`}>
                <div className={styles.dropdowncontent}>
                    <div className={styles.dropdownitem}>Government</div>
                    <div className={styles.dropdownitem}>SPED</div>
                </div>
              </div>
        </div>
  );
};

export default Dropdown;