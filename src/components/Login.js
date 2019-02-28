import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import login from '../api.js';
import '../index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch(login, {
            method: 'post',
            body: JSON.stringify(this.state)
        }).then(res => res.json()).then(res => {
            console.log(res);
            }
        );
    }



    render() {
        return (
            <div className="container pt-150 pb-150">
            <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="text-center mb-30">Log in</h1>
            <form name="sentMessage" id="contactForm" action="/login" method="post" onSubmit={this.handleSubmit}>
    <div className="control-group mb-30">
            <div className="form-group floating-label-form-group controls">
            <input type="email" className="form-control" placeholder="Email address" name="email" required value={this.state.email} onChange={this.handleInputChange} autoFocus />
        </div>
        </div>
        <div className="control-group mb-30">
            <div className="form-group col-xs-12 floating-label-form-group controls">
            <input type="password" className="form-control" placeholder="Password" name="password" required value={this.state.password} onChange={this.handleInputChange} />
        </div>
        </div>
        <div className="form-group text-center mb-30">
            <button type="submit" className="btn btn-primary" id="sendMessageButton">Log in</button>
            </div>
            <div className="control-group mb-15">
            <div className="form-group floating-label-form-group controls bb-none">
            New to Post67? <Link to="/users/new">Sign up</Link>
        </div>
        </div>
        <div className="control-group mb-15">
            <div className="form-group floating-label-form-group controls bb-none">
            <Link to="#">Forgot your password?</Link>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>

    );
    }
}

export default Login;
