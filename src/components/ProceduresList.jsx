import React from 'react';
import styles from '@/styles/proceduresliste.module.css';

const ProceduresList = ({ procedures }) => {
  return (
    <div className={styles.proceduresContainer}>
      {procedures.map((procedure, index) => (
        <div key={index} className={styles.procedureCard}>
          <div className={styles.leftSection}>
            <span className={styles.mainText}>{procedure.name}</span>
            <span className={styles.subText}>Sorriso forte</span>
          </div>
          <div className={styles.rightSection}>
            <span className={styles.dateText}>
              <span>Mês <br /></span>
              <span>DIA <br /></span>
              <span>hora <br /></span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProceduresList;
