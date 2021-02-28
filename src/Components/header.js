import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/">TimeTable</Link>
                </header>
            </div>
        )
    }
}

export default Header;