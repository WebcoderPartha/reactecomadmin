import React, {Component, Fragment} from 'react';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <div className="content-wrapper">
                    <div className="container-full">
                        <section className="content">
                            <div className="row">
                                <div className="col-xl-2 col-6">
                                    <div className="box overflow-hidden pull-up">
                                        <div className="box-body">
                                            <div className="icon bg-primary-light rounded w-60 h-60">
                                                <i className="text-primary mr-0 font-size-24 mdi mdi-account-multiple"></i>
                                            </div>
                                            <div>
                                                <p className="text-mute mt-20 mb-0 font-size-16">New Customers</p>
                                                <h3 className="text-white mb-0 font-weight-500">3400 <small
                                                    className="text-success"><i
                                                    className="fa fa-caret-up"></i> +2.5%</small></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-6">
                                    <div className="box overflow-hidden pull-up">
                                        <div className="box-body">
                                            <div className="icon bg-warning-light rounded w-60 h-60">
                                                <i className="text-warning mr-0 font-size-24 mdi mdi-car"></i>
                                            </div>
                                            <div>
                                                <p className="text-mute mt-20 mb-0 font-size-16">Sold Cars</p>
                                                <h3 className="text-white mb-0 font-weight-500">3400 <small
                                                    className="text-success"><i
                                                    className="fa fa-caret-up"></i> +2.5%</small></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-6">
                                    <div className="box overflow-hidden pull-up">
                                        <div className="box-body">
                                            <div className="icon bg-info-light rounded w-60 h-60">
                                                <i className="text-info mr-0 font-size-24 mdi mdi-sale"></i>
                                            </div>
                                            <div>
                                                <p className="text-mute mt-20 mb-0 font-size-16">Sales Lost</p>
                                                <h3 className="text-white mb-0 font-weight-500">$1,250 <small
                                                    className="text-danger"><i
                                                    className="fa fa-caret-down"></i> -0.5%</small></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-6">
                                    <div className="box overflow-hidden pull-up">
                                        <div className="box-body">
                                            <div className="icon bg-danger-light rounded w-60 h-60">
                                                <i className="text-danger mr-0 font-size-24 mdi mdi-phone-incoming"></i>
                                            </div>
                                            <div>
                                                <p className="text-mute mt-20 mb-0 font-size-16">Inbound Call</p>
                                                <h3 className="text-white mb-0 font-weight-500">1,460 <small
                                                    className="text-danger"><i className="fa fa-caret-up"></i> -1.5%</small>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-6">
                                    <div className="box overflow-hidden pull-up">
                                        <div className="box-body">
                                            <div className="icon bg-success-light rounded w-60 h-60">
                                                <i className="text-success mr-0 font-size-24 mdi mdi-phone-outgoing"></i>
                                            </div>
                                            <div>
                                                <p className="text-mute mt-20 mb-0 font-size-16">Outbound Call</p>
                                                <h3 className="text-white mb-0 font-weight-500">1,700 <small
                                                    className="text-success"><i
                                                    className="fa fa-caret-up"></i> +0.5%</small></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-6">
                                    <div className="box overflow-hidden pull-up">
                                        <div className="box-body">
                                            <div className="icon bg-light rounded w-60 h-60">
                                                <i className="text-white mr-0 font-size-24 mdi mdi-chart-line"></i>
                                            </div>
                                            <div>
                                                <p className="text-mute mt-20 mb-0 font-size-16">Total Revune</p>
                                                <h3 className="text-white mb-0 font-weight-500">$4,500k <small
                                                    className="text-success"><i
                                                    className="fa fa-caret-up"></i> +2.5%</small></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </section>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;
