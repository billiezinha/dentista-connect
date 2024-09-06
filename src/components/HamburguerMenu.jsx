"use client";

import React, { useState } from 'react';
import styles from '@/styles/hambuguermenu.module.css';
const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Agendamentos</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburguerMenu;