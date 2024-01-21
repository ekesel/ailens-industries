import React from 'react';
import {
  DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Button
} from "@nextui-org/react";
import styles from '../styles/navbar.module.css'
import Link from 'next/link';


const NavBar = () => {

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.centerContainer}>
        <li><Link href="/">Home</Link></li>
        <li>
        <Link href="/#products">Products</Link>
        </li>
        <li><Link href="/#contact_form" scroll={false}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar