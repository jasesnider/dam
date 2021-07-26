import React from 'react';
import styles from './Nav.module.scss';


const Nav: React.FC =() => {
    return (
    <nav id={styles.nav}>
        <ul>
            <li>
                <a href="/assets">Assets</a>
            </li>
            <li>
                <a href="/account">Account</a>
            </li>
            <li>
                <a href="/help">Help</a>
            </li>
        </ul>
    </nav>
    )
} 

export default Nav;