import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Card from './Card';
import Image from 'next/image';

import styles from '../styles/CardPopup.module.css';
import utils from '../styles/utils.module.css';

const CardPopup = ({ title, location, date, time, desc, brief, detailedLocation }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closePopup() {
    setIsOpen(false);
  }

  function openPopup() {
    setIsOpen(true);
  }

  return <>
    <Card 
      title={title}
      location={location}
      date={date}
      time={time}
      desc={brief ?? desc}
      whenClick={openPopup}
    />

    <Dialog as="div" open={isOpen} onClose={closePopup} className={styles.popup}>
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={styles.scrollContainer}>
        <div className={styles.panelContainer}>
          <Dialog.Panel className={styles.panel}>
            <Dialog.Title 
              as="h1"
              className={styles.title}
            >
              {title}
            </Dialog.Title>
            <div className={styles.content}>
              <div className={styles.info}>
                <h4>Date: {date}</h4>
                <h4>Time: {time} <span class={styles.est}>EST</span></h4>
                <h4>Location: {detailedLocation ?? location}</h4>
              </div>
              <p className={styles.description}>
                {desc}
              </p>
            </div>

            <div className={styles.closeButtonContainer}>
              <button
                type="button"
                className={styles.closeButton}
                onClick={closePopup}
              >
                Got it, thanks!
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog> 
  </>;
}

export default CardPopup;