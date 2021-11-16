import React, {Component, Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom'
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            pageRedirect: false
        }
        this.nameOnChange = this.nameOnChange.bind(this);
        this.emailOnChange = this.emailOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.conpasswordOnChange = this.conpasswordOnChange.bind(this);
    }

    nameOnChange(e){
        let name = e.target.value;
        this.setState({
            name:name
        })
    }
    emailOnChange(e){
        let email = e.target.value;
        this.setState({
            email:email
        })
    }
    passwordOnChange(e){
        let password = e.target.value;
        this.setState({
            password:password
        })
    }
    conpasswordOnChange(e){
        let confirm_password = e.target.value;
        this.setState({
            confirm_password:confirm_password
        })
    }
    pageRedirect = () => {
        if (this.state.pageRedirect === true){
            return <Redirect to="/dashboard" />
        }
    }
    hasToken = () => {
        if (localStorage.getItem('token')){
            return <Redirect to="/dashboard" />
        }
    }
    signinRequest = (e) => {
        e.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let password = this.state.password;
        let confirm_password = this.state.confirm_password;
        if (name.length === 0){
            Notification.warning("Name is required!");
        }else if(email.length === 0){
            Notification.warning("Email is required!");
        }else if(password.length === 0){
            Notification.warning("Password is required!");
        }else if(confirm_password.length === 0){
            Notification.warning("Confirm is required!");
        }else{
            let signButton = document.getElementById('signButton');
            signButton.innerHTML = 'SIGNING UP...';
            let data = new FormData();
            data.append('name', name);
            data.append('email', email);
            data.append('password', password);
            data.append('confirm_password', confirm_password);
            axios.post('/register', data).then(response => {
                if (response.status === 200){
                    localStorage.setItem('token', response.data.token);
                    Notification.success(response.data.success);
                    this.setState({
                        pageRedirect:true
                    })
                }
            }).catch(error => {
                if (error.response){
                    Notification.error(error.response.data.message);
                    signButton.innerHTML = 'SIGN UP';
                }
            })
        }

    }
    render() {
        return (
            <Fragment>
                <div className="container h-p100">
                    <div className="row align-items-center justify-content-md-center h-p100">

                        <div className="col-12">
                            <div className="row justify-content-center no-gutters">
                                <div className="col-lg-4 col-md-5 col-12 registerPage">
                                    <div className="content-top-agile p-10">
                                        <h2 className="text-white">Get started with Us</h2>
                                        <p className="text-white-50">Register a new membership</p>
                                    </div>
                                    <div className="p-30 rounded30 box-shadowed b-2 b-dashed">
                                        <form onSubmit={this.signinRequest}>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent text-white"><i
                                                            className="ti-user"></i></span>
                                                    </div>
                                                    <input onChange={this.nameOnChange} type="text"
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent text-white"><i
                                                            className="ti-email"></i></span>
                                                    </div>
                                                    <input onChange={this.emailOnChange} type="email"
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent text-white"><i
                                                            className="ti-lock"></i></span>
                                                    </div>
                                                    <input onChange={this.passwordOnChange} type="password"
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent text-white"><i
                                                            className="ti-lock"></i></span>
                                                    </div>
                                                    <input onChange={this.conpasswordOnChange} type="password"
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Retype Password" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <button id="signButton" type="submit" className="btn btn-info btn-rounded margin-top-10">SIGN UP </button>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="text-center text-white">
                                            <p className="mt-20">- Register With -</p>
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
                                            <p className="mt-15 mb-0 text-white">Already have an account?<Link
                                                to="/" className="text-danger ml-5"> Sign In</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.pageRedirect()}
                {this.hasToken()}
            </Fragment>
        );
    }
}

export default Register;
