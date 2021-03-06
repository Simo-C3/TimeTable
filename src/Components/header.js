import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header class="m-header">
                    <h1 class="sitelogo">
                        <Link class="logolink" to="/">TimeTable</Link>
                    </h1>
                    <nav class="link">
                        <ul class="link1">
                            <li class="link-item1-1">
                                <Link to="/"></Link>
                            </li>
                            <li class="link-item1-2">
                                <Link to="/calendar"></Link>
                            </li>
                            <li class="link-item1-3">
                                <Link to="/setting"></Link>
                            </li>
                            // link of signin
                            <li class="link-item2">
                                <Link to="/signin">サインイン</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;