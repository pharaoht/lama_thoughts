"use client"
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
    { title: 'Home Page', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' }
];
const adminLink = { title: 'Admin', path: '/admin' };
const noUserLink = { title: 'Login', path: '/login' };

const Links = () => {

    const [isOpen, setIsOpen] = useState(false);

    const session = true;
    const isAdmin = false;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {
                    links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))
                }
                {
                    session ? (
                        <>
                            {isAdmin && <NavLink item={adminLink} key={adminLink.title} />}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) :
                        (
                            <NavLink item={noUserLink} key={noUserLink.title} />
                        )
                }
            </div>
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className={styles.menuButton}>
                Menu
            </button>
            {
                isOpen && <div className={styles.mobileLinks}>
                    {
                        links.map((link) => (
                            <NavLink item={link} key={link.title} />
                        ))
                    }
                </div>
            }

        </div>
    )
};

export default Links;