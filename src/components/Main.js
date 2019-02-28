import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Background from '../public/gif67/img/shawn-xu-1351078-unsplash.jpg';

class Jumbotron extends Component {
    render() {
        return (
            <header className="masthead" style={{backgroundImage: `url(${Background})`}}>
            <div className="overlay"></div>
            <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
            <h1 className="mb-15">Gif67</h1>
            <span className="subheading mb-15">Write Something</span>
        <div className="clearfix flex jc-center">
            <Link to="/topics" className="btn btn-primary float-right">Explore &rarr;</Link>
        </div>
        </div>
        </div>
        </div>
        </div>
        </header>
        );
    }
}

class Feed extends Component {
    render() {
        return (
            <h1>Feed</h1>
        );
    }
}

class Main extends Component {
    render() {
    let Content;
    if (this.props.isLoggedIn) {
        Content = <Feed />
    } else {
        Content = <Jumbotron />
    }
    return (
        <div>
        {Content}
        </div>
    );
}
}

export default Main;

