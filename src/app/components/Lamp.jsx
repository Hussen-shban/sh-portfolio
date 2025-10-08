'use client';
import { useState } from 'react';
import styles from './Lamp.module.css';

const Lamp = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className='' >
      <input
        type="checkbox"
        id="btn"
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
        className={styles.checkbox}
      />
      <div className={styles.content}>
        <div className={styles.buildings}>
          <div className={styles.window}></div>
          <div className={styles.window}></div>
          <div className={styles.window}></div>
          <div className={styles.window}></div>
          <div className={styles.window}></div>
          <div className={styles.window}></div>
        </div>
        <div className={styles.ground}>
          <div className={styles.sewer}></div>
        </div>
        <div className={styles.streetlamp}>
          <div className={styles.base}></div>
          <div className={styles.basetop}></div>
          <div className={styles.pole}></div>
          <div className={styles.poletop}></div>
          <div className={styles.head}>
            <label htmlFor="btn" className={styles.lampLabel}></label>
            <div className={styles.top}></div>
            <div className={styles.glass}></div>
            <div className={styles.bot}></div>
          </div>
          <div
            className={styles.light}
            style={{ opacity: isOn ? 1 : 0 }}
          ></div>
          <div
            className={styles.groundLight}
            style={{ opacity: isOn ? 1 : 0 }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Lamp;
