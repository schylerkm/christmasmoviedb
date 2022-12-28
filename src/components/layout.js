import * as React from 'react'
import { Link } from 'gatsby'
import {
    navLinks,
    navLinkItem,
    navLinkText,
    navImage,
    footer,
    footerItem
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function Layout({ children }) {
    return (
        <div>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/">
                            <StaticImage
                                className={navImage}
                                alt="A black home button"
                                src="../images/home.png"
                                placeholder="Home"
                            />
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/">
                            <StaticImage
                                className={navImage}
                                alt="A black info button"
                                src="../images/info.png"
                                placeholder="About"
                            />
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/full-list">
                            <StaticImage
                                className={navImage}
                                alt="A black list button"
                                src="../images/list.png"
                                placeholder="Full List"
                            />
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="https://github.com/schylerkm/christmasmoviedb">
                            <StaticImage 
                                className={navImage}
                                alt="A black GitHub Octocat button"
                                src="../images/github.png"
                                placeholder="GitHub"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>{children}</main>
            <div id="footer" className={footer}>
                <ul>
                    <li className={footerItem}>
                        <a href="https://www.flaticon.com/free-icons/home-button" title="home button icons" className={footerItem}>Home button icons created by Freepik - Flaticon</a>
                    </li>
                    <li className={footerItem}>
                        <a href="https://www.flaticon.com/free-icons/list" title="list icons">List icons created by Chanut - Flaticon</a>
                    </li>
                    <li className={footerItem}>
                        <a href="https://www.flaticon.com/free-icons/github" title="github icons" className={footerItem}>Github icons created by Freepik - Flaticon</a>
                    </li>
                    <li className={footerItem}>
                        <a href="https://www.flaticon.com/free-icons/about" title="about icons">About icons created by Tempo_doloe - Flaticon</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

