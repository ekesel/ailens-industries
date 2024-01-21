import React from 'react';
import styles from '../styles/Header.module.css';

const Header = (props) => {
    return (
        <div className={styles.headerSection}>
            <div className={styles.centerContainer}>
                <div className={styles.container}>
                    <div className={styles.logo}></div>
                    <div className={styles.infoSecton}>
                        <div className={styles.callColumn}>
                            <span className={styles.helpText}>{props?.callHelpText}</span>
                            <span className={styles.helpValue}>{props?.phone}</span>
                        </div>
                        <div className={styles.callColumn}>
                            <span className={styles.helpText}>{props?.emailHelpText}</span>
                            <span className={styles.helpValue}>{props?.email}</span>
                        </div>
                        <div className={styles.certificateColumn}>
                            <span className={styles.helpText}>{props?.certificateText}</span>
                            <span className={styles.helpValue}>{props?.certificate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header