import React, {Component, Fragment} from 'react';
import {Redirect} from "react-router-dom";
import Header from "../common/Header";
import SidebarMenu from "../common/SidebarMenu";
import InformationEdit from "./InformationEdit";

class InformationEditPage extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            id: prop.match.params.id
        }
    }
    hasToken = () => {
        if (!localStorage.getItem('token')){
            return <Redirect to="/" />
        }
    }

    render() {

        return (
            <Fragment>
                <Header title={"Update Notification"}/>
                <SidebarMenu />
                <InformationEdit id={this.state.id} />
                {this.hasToken()}
            </Fragment>
        );

    }
}

export default InformationEditPage;
