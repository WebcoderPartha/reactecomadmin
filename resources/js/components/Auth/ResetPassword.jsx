import React, {Component, Fragment} from 'react';
import {Redirect} from "react-router-dom";

class ResetPassword extends Component {
    constructor() {
        super();
        this.state = {
            token: '',
            email: '',
            password: '',
            confirm_password: '',
            pageRedirect: false
        }
        this.tokenOnchange = this.tokenOnchange.bind(this);
        this.emailOnchange = this.emailOnchange.bind(this);
        this.passwordOnchange = this.passwordOnchange.bind(this);
        this.confirmOnchange = this.confirmOnchange.bind(this);
    }
    tokenOnchange(e){
        let token = e.target.value;
        this.setState({
            token:token
        })
    }
    emailOnchange(e){
        let email = e.target.value;
        this.setState({
            email:email
        })
    }
    passwordOnchange(e){
        let password = e.target.value;
        this.setState({
            password:password
        })
    }
    confirmOnchange(e){
        let confirm_password = e.target.value;
        this.setState({
            confirm_password:confirm_password
        })
    }

    UpdatePassword = (e) => {
        e.preventDefault();
        let token = this.state.token;
        let email = this.state.email;
        let password = this.state.password;
        let confirm_password = this.state.confirm_password;

        if (token.length === 0){
            Notification.warning("Token is required!");
        }else if (email.length === 0){
            Notification.warning("Email is required!");
        }else if (password.length === 0){
            Notification.warning("Password is required!");
        }else if (password.length < 5 && confirm_password.length < 5){
            Notification.warning("Password must be min 5 Digit");
        }else if (confirm_password.length === 0){
            Notification.warning("Confirm password is required!");
        }else{
            let resetButton = document.getElementById('resetButton');
            resetButton.innerHTML = "Resetting...";
            let data = new FormData();
            data.append('token', token);
            data.append('email', email);
            data.append('password', password);
            data.append('confirm_password', confirm_password);

            axios.post('/reset', data).then(response => {
                if (response.status){
                    Notification.success(response.data.success);
                    localStorage.clear();
                    this.setState({
                        pageRedirect:true
                    })
                }
            }).catch(error => {
                if (error.response){
                    Notification.error(error.response.data.message);
                    resetButton.innerHTML = "Reset";
                }
            })

        }
    }
    resetAllow = () => {
        if (!localStorage.getItem('reset')){
            return <Redirect to="/" />
        }
    }
    pageRedirect = () => {
        if (this.state.pageRedirect === true){
            return <Redirect to="/dashboard" />
        }
    }
    render() {
        return (
            <Fragment>
                <div className="container h-p100">
                    <div className="row align-items-center justify-content-md-center h-p100">

                        <div className="col-12">
                            <div className="row justify-content-center no-gutters">
                                <div className="col-lg-4 col-md-5 col-12 resetPasswordPage">
                                    <div className="content-top-agile p-10">
                                        <h2 className="text-white">RESET YOUR ACCOUNT</h2>
                                        <p className="text-white-50">Change your account with new password</p>
                                    </div>
                                    <div className="p-30 rounded30 box-shadowed b-2 b-dashed">
                                        <form onSubmit={this.UpdatePassword}>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent text-white"><i
                                                            className="ti-pin"></i></span>
                                                    </div>
                                                    <input onChange={this.tokenOnchange} type="text"
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Enter valid token" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent text-white"><i
                                                            className="ti-email"></i></span>
                                                    </div>
                                                    <input onChange={this.emailOnchange} type="email"
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
                                                    <input onChange={this.passwordOnchange} type="password"
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
                                                    <input onChange={this.confirmOnchange} type="password"
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Retype Password" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <button id="resetButton" type="submit"
                                                            className="btn btn-info btn-rounded margin-top-10">RESET
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.resetAllow()}
                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default ResetPassword;
