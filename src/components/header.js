import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

// const LoggedOutView = props => {
//     if (!props.currentUser) {
//         return (
//             <ul className="nav navbar-nav pull-xs-right">
//
//             <li className="nav-item">
//             <Link to="/" className="nav-link">
//             Home
//             </Link>
//             </li>
//
//             <li className="nav-item">
//             <Link to="/login" className="nav-link">
//             Sign in
//             </Link>
//             </li>
//
//             <li className="nav-item">
//             <Link to="/register" className="nav-link">
//             Sign up
//         </Link>
//         </li>
//
//         </ul>
//     );
//     }
//     return null;
// };

// const LoggedInView = props => {
//     if (props.currentUser) {
//         return (
//             <ul className="nav navbar-nav pull-xs-right">
//
//             <li className="nav-item">
//             <Link to="/" className="nav-link">
//             Home
//             </Link>
//             </li>
//
//             <li className="nav-item">
//             <Link to="/editor" className="nav-link">
//             <i className="ion-compose"></i>&nbsp;New Post
//             </Link>
//             </li>
//
//             <li className="nav-item">
//             <Link to="/settings" className="nav-link">
//             <i className="ion-gear-a"></i>&nbsp;Settings
//             </Link>
//             </li>
//
//             <li className="nav-item">
//             <Link
//         to={`/@${props.currentUser.username}`}
//         className="nav-link">
//             <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
//         {props.currentUser.username}
//     </Link>
//         </li>
//
//         </ul>
//     );
//     }
//
//     return null;
// };

class LoggedIn extends Component {
    render() {
        return (
            <ul className="navbar-nav">
            <li className="nav-item active">
            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
            <Link to="/explore" className="nav-link">Explore</Link>
            </li>
            <li className="nav-item">
            <Link to="/posts/new" className="nav-link">Create</Link>
            </li>
            <li className="nav-item">
            <Link to="/settings" className="nav-link">Settings</Link>
            </li>
            <li className="nav-item">
            <Link to="/logout" className="nav-link">Logout</Link>
            </li>
            </ul>
    );
    }
}

class LoggedOut extends Component {
    render() {
        return (
    <ul className="navbar-nav">
            <li className="nav-item active">
            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
            <Link to="/explore" className="nav-link">Explore</Link>
            </li>
            <li className="nav-item">
            <Link to="/users/new" className="nav-link">Sign up</Link>
        </li>
        <li className="nav-item">
            <Link to="/login" className="nav-link">Sign in</Link>
            </li>
    </ul>
    );
    }
}

class Header extends Component {
    render() {
        let links;
        if (this.props.isLoggedIn) {
            links = <LoggedIn />
        } else {
            links = <LoggedOut />
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link to="/" className="navbar-brand">Gif67</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse jc-fe" id="navbarSupportedContent">
            {links}
            </div>
            </div>
            </nav>

        );
    }
}

export default Header;
