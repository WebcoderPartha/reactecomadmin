import React, {Component, Fragment} from 'react';
import Header from "../common/Header";
import SidebarMenu from "../common/SidebarMenu";
import Dashboard from "./Dashboard";
import {Redirect} from "react-router-dom";

class DashboardPage extends Component {

    hasToken = () => {
        if (!localStorage.getItem('token')){
            return <Redirect to="/" />
        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <SidebarMenu />
                <Dashboard />
                {this.hasToken()}
            </Fragment>
        );

    }
}

export default DashboardPage;
