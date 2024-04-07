import React from 'react';
import styles from '../styles/navbar.module.css'
import Link from 'next/link';
import {
  DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Button
} from "@nextui-org/react";


const NavBar = (props) => {

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.centerContainer}>
        <li><Link href={props?.homeLink}>Home</Link></li>
        <li>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: '#23282d'
                }}
              >
                <a className={styles.products}>Products</a>
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="industries" className={styles.dropdownItem}>
                <Link href='/industries' scroll={false}>
                  Industries</Link>
              </DropdownItem>
              <DropdownItem key="technology" className={styles.dropdownItem}>
                <Link href='/tech' scroll={false}>
                  Technology</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li><Link href="#contact_form" scroll={true}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar