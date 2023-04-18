import { Fragment } from 'react';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import styles from '../styles/Dropdown.module.css';

const Dropdown = () => {

  /**
   * Array of arrays of objects with `href` and `label` attributes.
   * 
   * `href` is the url to the webpage (eg. '/resources/federal')
   * 
   * `label` is what is shown (as a string, not html)
   * 
   * Each inner array denotes a section, which are seperated by mini-`hr`s through the options menu.
  */
  const sections = [
    [ // People
      { href: '/resources/student', label: 'Student' },
      { href: '/resources/veteran', label: 'Veteran' }
    ],
    [ // Government
      { href: '/resources/federal', label: 'Federal' },
      { href: '/resources/state', label: 'State' }
    ]  
  ];

  return <div className={styles.menuDiv}>
    <Menu as="div" className={styles.menu}>
      <div>  
        <Menu.Button className={styles.menuButton}>
          Choose a Resource Category
          <ChevronDownIcon className={styles.chevronDownIcon} aria-hidden="true" />
        </Menu.Button>
      </div>
      <div className={styles.options}>
        {
          sections.map(items => 
            <div className={styles.section}>
              <Menu.Items className={styles.items}>
                {
                  items.map(item => <>
                    <Menu.Item 
                      key={item.href}
                      as={Fragment}
                      className={`${styles.item}`}
                    >
                      <button className={styles.button}>{item.label}</button>
                    </Menu.Item>
                  </>)
                }
              </Menu.Items>
            </div>
          )
        }
      </div>
    </Menu>
  </div>;
}

export default Dropdown;