import React, {Component, Fragment} from 'react';
import {Redirect} from "react-router-dom";
import Header from "../common/Header";
import SidebarMenu from "../common/SidebarMenu";
import InformationList from "./InformationList";


class InformationListPage extends Component {
    hasToken = () => {
        if (!localStorage.getItem('token')){
            return <Redirect to="/" />
        }
    }

    render() {

        return (
            <Fragment>
                <Header title={"Dashboard"}/>
                <SidebarMenu />
                <InformationList />
                {this.hasToken()}
            </Fragment>
        );

    }
}

export default InformationListPage;
