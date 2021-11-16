import React, {Component, Fragment} from 'react';
import {Redirect} from 'react-router-dom'
class Logout extends Component {

    logout = () => {
        localStorage.clear();
        return <Redirect to="/" />
    }
    render() {
        return (
            <Fragment>
                {this.logout()}
            </Fragment>
        );
    }
}

export default Logout;
