import * as React from 'react'
import { Link } from 'gatsby'
import {
    navLinks,
    navLinkItem,
    navLinkText,
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function Layout({ children }) {
    return (
        <div>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/full-list" className={navLinkText}>Full List</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="https://github.com/schylerkm/christmasmoviedb" className={navLinkText}>GitHub</Link>
                    </li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

