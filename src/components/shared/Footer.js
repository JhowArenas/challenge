import React from 'react';

import Location from '../snippets/Footer/Location'
import Contact from '../snippets/Footer/Contact'
import CreateBy from '../snippets/Footer/CreateBy'

function Footer() {
    return (
        <footer>
            <ul className="container">
                <Location />
                <Contact />
                <CreateBy />
            </ul>
        </footer>
    );
}

export default Footer;