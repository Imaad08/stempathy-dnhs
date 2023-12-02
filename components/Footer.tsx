import React from 'react';
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content bg-transparent flex text-xl flex-col justify-center items-center font-serif">
                <p>&copy; {new Date().getFullYear()} STEMpathy. All Rights Reserved.</p>
                <br>
                </br>
                <SocialIcons />
            </div>
        </footer>
    );
};

export default Footer;
