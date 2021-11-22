import React, {Component, Fragment} from 'react';
import {Redirect} from "react-router-dom";
import Header from "../common/Header";
import SidebarMenu from "../common/SidebarMenu";
import InformationCreate from "./InformationCreate";

class InformationCreatePage extends Component {
    hasToken = () => {
        if (!localStorage.getItem('token')){
            return <Redirect to="/" />
        }
    }

    render() {

        return (
            <Fragment>
                <Header title={"Create Notification"}/>
                <SidebarMenu />
                <InformationCreate />
                {this.hasToken()}
            </Fragment>
        );

    }
}

export default InformationCreatePage;
