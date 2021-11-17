import React, {Component, Fragment} from 'react';

class Recovery extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            message: '',
        }
        this.emailOnChange = this.emailOnChange.bind(this);
    }
    emailOnChange(e){
        let email = e.target.value;
        this.setState({
            email:email
        })
    }
    ResetRequest = (e) => {
        e.preventDefault();
        let email = this.state.email;
        if (email.length === 0){
            Notification.warning('Email is required!')
        }else{
            let resetButton = document.getElementById('resetButton');
            resetButton.innerHTML = 'Resetting...';
            let data = new FormData();
            data.append('email', email);

            axios.post('/forget', data).then(response => {
                if (response.status === 200){
                    this.setState({message:response.data.success});
                    localStorage.setItem('reset', true);
                }
            }).catch(error => {
                if (error.response){
                    Notification.error(error.response.data.message)
                    resetButton.innerHTML = 'Reset';
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
                                <div className="col-lg-4 col-md-5 col-12 recoveryPage">
                                    <div className="content-top-agile p-10">
                                        <h3 className="mb-0 text-white">Recover Password</h3>
                                        <p className="text-success">{this.state.message}</p>
                                    </div>
                                    <div className="p-30 rounded30 box-shadowed b-2 b-dashed">
                                        <form onSubmit={this.ResetRequest}>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent text-white"><i
                                                            className="ti-email"></i></span>
                                                    </div>
                                                    <input onChange={this.emailOnChange} type="email"
                                                           className="form-control pl-15 bg-transparent text-white plc-white"
                                                           placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <button id="resetButton" type="submit"
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
