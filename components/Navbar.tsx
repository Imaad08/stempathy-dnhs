'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { useEffect } from 'react';

function Navbar() {
    const ButtonStyles = 'pb-4 mt-3 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 border-black md:mt-[-5px] transition-colors duration-300 hover:text-teal-600';
    // const ButtonStyles = 'pb-4 mt-3 text-xl text-black py-2 md:px-6 text-center border-black md:border-b-0 border-black md:mt-[-5px] rounded-md transition-colors duration-300 hover:text-white hover:bg-teal-600'
    const [navbar, setNavbar] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const closeMenuOnDesktop = () => {
        if (window.innerWidth >= 768) {
            setNavbar(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full bg-white fixed top-0 left-0 right-0 z-10 ${scrolled ? 'shadow-lg' : ''}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <h2 className="text-2xl text-black font-bold">DNHS STEMPATHY</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <IoCloseSharp size={30} className="focus:border-none active:border-none" />
                                ) : (
                                    <GiHamburgerMenu
                                        size={30}
                                        className="focus:border-none active:border-none"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-4 md:p-0' : 'hidden'}`}
                    >
                        <ul className="h-screen md:h-auto items-center justify-center md:flex mt-3">
                            <li>
                                <Link href="/" onClick={() => setNavbar(!navbar)}>
                                    <p className={ButtonStyles}>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/aboutPage" onClick={() => setNavbar(!navbar)}>
                                    <p className={ButtonStyles}>About</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                                    <p className={ButtonStyles}>Blog</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contactPage" onClick={() => setNavbar(!navbar)}>
                                    <p className={ButtonStyles}>Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
