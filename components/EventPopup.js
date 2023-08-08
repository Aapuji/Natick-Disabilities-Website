import { Dialog } from '@headlessui/react';
import { Fragment, useState } from 'react';

import styles from '../styles/EventPopup.module.css';
import utils from '../styles/utils.module.css';

const EventPopup = ({ }) => {
  let [isOpen, setIsOpen] = useState(true);

  function closePopup() {
    setIsOpen(false);
  }

  function openPopup() {
    setIsOpen(true);
  }

  return <>
    <div className={styles.openButtonContainer}>
      <button
        type="button"
        onClick={openPopup}
        className={styles.openButton}
      >
        Open dialog
      </button>
    </div>

    <Dialog as="div" open={isOpen} onClose={closePopup} className={styles.popup}>
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={styles.scrollContainer}>
        <div className={styles.panelContainer}>
          <Dialog.Panel className={styles.panel}>
            <Dialog.Title 
              as="h3"
              className={styles.title}
            >
              This is the title
            </Dialog.Title>
            <div className={styles.content}>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className={styles.closeButtonContainer}>
              <button
                type="button"
                className={styles.closeButton}
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog> 
  </>;
}

export default EventPopup;