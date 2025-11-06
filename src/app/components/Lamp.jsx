'use client';
import styles from './Lamp.module.css';

const Lamp = ({ isOn }) => {
  return (
    <div className=''>
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
