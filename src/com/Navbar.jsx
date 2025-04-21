import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.scss'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // 변수 앞에 is를 붙이면 on/off 를 말함.
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }
    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">MyApp</Link>
            </div>
            <nav className="link-nav">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/guestbook">GUESTBOOK</Link>
                    </li>
                </ul>
            </nav>
            <div className="hamburger" onClick={() => toggleMenu()}>
                &#9776;
            </div>
            {
                isMenuOpen && (
                    <div className="mobile-menu">
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/guestbook">GUESTBOOK</Link>
                            </li>
                        </ul>
                    </div>
                )
            }
        </header>
    )
}

export default Navbar