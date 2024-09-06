import React from 'react';
import Link from 'next/link'; 
import styles from '@/styles/card.module.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg} 
        src={imageUrl || 'https://via.placeholder.com/150'}
        alt={title}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{description}</p>

      <Link href="/procedimentos">
        <button className={styles.scheduleBtn}>
          Agendar
        </button>
      </Link>
    </div>
  );
};

export default Card;
