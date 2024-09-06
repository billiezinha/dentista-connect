import React from "react";
import styles from '@/styles/CheckboxCard.module.css';

const CheckboxCard = ({ label, imageSrc, checked, onChange }) => {
  return (
    <div className={styles.card} onClick={onChange}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <img
        src={imageSrc}
        alt={label}
        className={`${styles.image} ${checked ? styles.selected : ""}`}
      />
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default CheckboxCard;
