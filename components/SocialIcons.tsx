import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';
import styles from './SocialIcons.module.css';

const SocialIcons = () => {
    return (
        <div className={styles.socialIconsContainer}>
            <a href="https://instagram.com/stempathy_dnhs?igshid=MmIzYWVlNDQ5Yg==" target="_blank" className={`${styles.iconLink} ${styles.instagram}`}>
                <FaInstagram className={styles.icon} />
            </a>
            <a href="https://youtube.com/@STEMpathyDNHS" target="_blank" className={`${styles.iconLink} ${styles.youtube}`}>
                <FaYoutube className={styles.icon} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092651067522&mibextid=LQQJ4d" target="_blank" className={`${styles.iconLink} ${styles.facebook}`}>
                <FaFacebook className={styles.icon} />
            </a>
            <a href="https://www.tiktok.com/@clubstempathy?_t=8clnR1qURcQ&_r=1" target="_blank" className={`${styles.iconLink} ${styles.tiktok}`}>
                <FaTiktok className={styles.icon} />
            </a>
        </div>
    );
};

export default SocialIcons;
