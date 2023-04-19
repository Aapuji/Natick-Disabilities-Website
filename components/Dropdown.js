import { Fragment, useState } from 'react';
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
    [ // Emergency
      { href: '/resources/veteran', label: 'Emergency' }
    ],
    [ // People
      { href: '/resources/student', label: 'Student' },
      { href: '/resources/veteran', label: 'Veteran' }
    ],
    [ // Government
      { href: '/resources/federal', label: 'Federal' },
      { href: '/resources/state', label: 'State' }
    ]  
  ];

  const items = [
    { href: '/resources/student', label: 'Student' },
    { href: '/resources/veteran', label: 'Veteran' },
  ];

  let [open, setOpen] = useState(false);



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
          // sections.map((items, i) => 
            <Menu.Items className={`${styles.section} ${/*i == 0 ? styles.firstSection : */''}`}>
              {
                items.map(item => <>
                  <Menu.Item 
                    key={item.href}
                    as={Fragment}
                    className={`${styles.item}`}
                  >
                    <Link href={item.href} className={styles.button}>{item.label}</Link>
                  </Menu.Item>
                </>)
              }
            </Menu.Items>
          // )
        }
      </div>
    </Menu>
  </div>;
}

export default Dropdown;