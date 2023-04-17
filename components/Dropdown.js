import { Fragment } from 'react';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Dropdown = () => {
  const items = [
    { href: '/resources/student', label: 'Student' },
    { href: '/resources/veteran', label: 'Veteran' },
    { href: '/resources/federal', label: 'Federal' }    
  ];

  return <Menu>
    <Menu.Button>Choose a Resource Category <ChevronDownIcon
              style={{marginLeft:2, marginRight:1, height:'1em', width:'1em', color: 'black'}}
              aria-hidden="true"
            /></Menu.Button>
    <Menu.Items>
      {
        items.map(item => <>
          <Menu.Item key={item.href} as={Fragment}>
            <Link href={item.href}>{item.label}</Link>
          </Menu.Item>
        </>)
      }
    </Menu.Items>
  </Menu>;
}

export default Dropdown;