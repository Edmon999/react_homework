import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
export default function NavbarLink() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink
                        to="/"
                        exact activeClassName={styles.Activelink}
                        className={styles.links}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        exact activeClassName={styles.Activelink}
                        className={styles.links}>
                        About
                     </NavLink>
                     <NavLink
                        to="/Contact"
                        exact activeClassName={styles.Activelink}
                        className={styles.links}>
                        Contact
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}