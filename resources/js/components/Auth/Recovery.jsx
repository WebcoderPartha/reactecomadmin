import React, {Component, Fragment} from 'react';

class Recovery extends Component {
    render() {
        return (
            <Fragment>
                <div className="container h-p100">
                    <div className="row align-items-center justify-content-md-center h-p100">

                        <div className="col-12">
                            <div className="row justify-content-center no-gutters">
                                <div className="col-lg-4 col-md-5 col-12 recoveryPage">
                                    <div className="content-top-agile p-10">
                                        <h3 className="mb-0 text-white">Recover Password</h3>
                                    </div>
                                    <div className="p-30 rounded30 box-shadowed b-2 b-dashed">
                                        <form>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent text-white"><i
                                                            className="ti-email"></i></span>
                                                    </div>
                                                    <input type="email"
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <button type="submit"
                                                            className="btn btn-info btn-rounded margin-top-10">Reset
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

export default Recovery;
