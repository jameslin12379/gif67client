import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class Footer extends Component {
render() {
    return (
        <ul>
        <li><Link to="/">a</Link></li>
        <li><Link to="/">a</Link></li>
        <li><Link to="/">a</Link></li>
        </ul>
    );
}
}

export default Footer;
