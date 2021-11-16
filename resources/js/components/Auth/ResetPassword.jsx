import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class ResetPassword extends Component {
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
                                        <form>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent text-white"><i
                                                            className="ti-pin"></i></span>
                                                    </div>
                                                    <input type="text"
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
                                                    <input type="email"
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
                                                    <input type="password"
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
                                                    <input type="password"
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Retype Password" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <button type="submit"
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
            </Fragment>
        );
    }
}

export default ResetPassword;
