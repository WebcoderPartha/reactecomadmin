import React, {Component, Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            pageRedirect: false
        }
        this.emailOnChange = this.emailOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
    }
    emailOnChange(e){
        let email = e.target.value;
        this.setState({
            email:email
        });
    }
    passwordOnChange(e){
        let password = e.target.value;
        this.setState({
            password:password
        });
    }
    LoginSubmit = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        if(email.length === 0){
            Notification.warning('Email is required!');
        }else if(password.length === 0){
            Notification.warning('Password is required!');
        }else{
            let loginButton = document.getElementById('loginButton');
            loginButton.innerHTML = 'SIGNING...';
            let data = new FormData();
            data.append('email', email);
            data.append('password', password);
            axios.post('/login', data).then(response => {
                if (response.status === 200){
                    localStorage.setItem('token', response.data.token);
                    Notification.success(response.data.success);
                    window.location = '/dashboard';
                }
            }).catch(error => {
                if (error.response){
                    Notification.error(error.response.data.message);
                    loginButton.innerHTML = 'SIGN IN';
                }
            });
        }
    }
    // pageRedirect = () => {
    //     if (this.state.pageRedirect === true){
    //         return <Redirect to="/dashboard" />
    //     }
    // }
    hasToken = () => {
        if (localStorage.getItem('token')){
            return <Redirect to="/dashboard" />
        }
    }
    render() {
        return (
            <Fragment>
                <title>Admin Panel | Login</title>
                <div className="container h-p100">
                    <div className="row align-items-center justify-content-md-center h-p100">

                        <div className="col-12">
                            <div className="row justify-content-center no-gutters">
                                <div className="col-lg-4 col-md-5 col-12 loginPage">
                                    <div className="content-top-agile p-10">
                                        <h2 className="text-white">Get started with Us</h2>
                                        <p className="text-white-50">Sign in to start your session</p>
                                    </div>
                                    <div className="p-30 rounded30 box-shadowed b-2 b-dashed">
                                        <form onSubmit={this.LoginSubmit}>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent text-white"><i
                                                            className="ti-user"></i></span>
                                                    </div>
                                                    <input onChange={this.emailOnChange} type="email"
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text  bg-transparent text-white"><i
                                                            className="ti-lock"></i></span>
                                                    </div>
                                                    <input type="password" onChange={this.passwordOnChange}
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="checkbox text-white">
                                                        <input type="checkbox" id="basic_checkbox_1" />
                                                            <label htmlFor="basic_checkbox_1">Remember Me</label>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="fog-pwd text-right">
                                                        <Link to="/recovery"
                                                           className="text-white hover-info"><i
                                                            className="ion ion-locked"></i> Forgot Password?</Link><br />
                                                    </div>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <button id="loginButton" type="submit"
                                                            className="btn btn-info btn-rounded mt-10">SIGN IN
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="text-center text-white">
                                            <p className="mt-20">- Sign With -</p>
                                            <p className="gap-items-2 mb-20">
                                                <a className="btn btn-social-icon btn-round btn-outline btn-white"
                                                   href="#"><i className="fa fa-facebook"></i></a>
                                                <a className="btn btn-social-icon btn-round btn-outline btn-white"
                                                   href="#"><i className="fa fa-twitter"></i></a>
                                                <a className="btn btn-social-icon btn-round btn-outline btn-white"
                                                   href="#"><i className="fa fa-google-plus"></i></a>
                                                <a className="btn btn-social-icon btn-round btn-outline btn-white"
                                                   href="#"><i className="fa fa-instagram"></i></a>
                                            </p>
                                        </div>

                                        <div className="text-center">
                                            <p className="mt-15 mb-0 text-white">Don't have an account? <Link
                                                to="/register" className="text-info ml-5">Sign Up</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.hasToken()}
            </Fragment>
        );
    }
}

export default Login;
