import { Fragment, useState } from 'react';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import styles from '../styles/Dropdown.module.css';

const Dropdown = () => {
  /**
   * Array of object with `type`, `href`, and `label` attributes.
   * 
   * `type` is the type of item it is: `option` or `divider`. `option` is an option that the user can choose, while `divider` is a horizontal bar.
   * 
   * `href` is the url to the webpage (eg. '/resources/federal')
   * 
   * `label` is what is shown (as a string, not html)
  */
  const items = [
    { type: 'option', href: '/index', label: 'Emergency' }, // Emergency
    { type: 'divider' },
    { type: 'option', href: '/resources/student', label: 'Student' }, // People
    { type: 'option', href: '/resources/veteran', label: 'Veteran' },
    { type: 'divider' },
    { type: 'option', href: '/resources/federal', label: 'Federal' }, // Government
    { type: 'option', href: '/resources/state', label: 'State' }
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
          // sections.map((items, i) => 
            <Menu.Items className={`${styles.items} ${/*i == 0 ? styles.firstSection : */''}`}>
              {
                items.map(item => {
                  if (item.type === 'option') {
                    return <>
                      <Menu.Item 
                        key={item.href}
                        as={Fragment}
                        className={`${styles.item}`}
                      >
                        <Link href={item.href} className={styles.button}>{item.label}</Link>
                      </Menu.Item>
                    </>;
                  } else if (item.type === 'divider') {
                    return <hr className={styles.divider} />
                  }
                })
              }
            </Menu.Items>
          // )
        }
      </div>
    </Menu>
  </div>;
}

export default Dropdown;