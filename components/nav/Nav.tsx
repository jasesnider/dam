import React from 'react';
import Link from 'next/link'
import styles from './Nav.module.scss';

const Nav: React.FC =() => {
    return (
    <>
       
        <nav id={styles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <h1 className={styles.title}>
                        <a>Digital Asset Management System</a>
                        </h1>
                    </Link>
                </li>
                <li>
                    <Link href="/assets"><a>Assets</a></Link>
                </li>
                <li>
                    <Link href="/account"><a>Account</a></Link>
                </li>
                <li>
                    <Link href="/help"><a>Help</a></Link>
                </li>
            </ul>
        </nav>
    </>
    )
} 

export default Nav;