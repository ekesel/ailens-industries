import React from 'react';
import styles from '../styles/InfoHeader.module.css';
import Link from 'next/link';
import AnimatedTextWord from './AnimatedTextWord';

const InfoHeader = (props) => {
    return (
        <div className={styles.infoheaderSection}>
            <div className={styles.centerContainer}>
                <div className={styles.container}>
                    <div className={styles.location}>
                        <span className={styles.locationIcon}></span>
                        <span className={styles.locationText}>
                            <AnimatedTextWord text={props?.location} /> </span>
                    </div>
                    <div className={styles.socialLinks}>
                        <Link href={props?.socialLinks?.twitter} rel="noopener noreferrer" target="_blank">
                            <span className={styles.twitterIcon}></span>
                        </Link>
                        <Link href={props?.socialLinks?.facebook} rel="noopener noreferrer" target="_blank">
                            <span className={styles.facebookIcon}></span>
                        </Link>
                        <Link href={props?.socialLinks?.instagram} rel="noopener noreferrer" target="_blank">
                            <span className={styles.instagramIcon}></span>
                        </Link>
                        <Link href={props?.socialLinks?.linkedIn} rel="noopener noreferrer" target="_blank">
                            <span className={styles.linkedInIcon}></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoHeader