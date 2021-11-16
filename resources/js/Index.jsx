import React, {Component, Fragment} from 'react';
import Header from "./components/common/Header";
import SidebarMenu from "./components/common/SidebarMenu";

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <SidebarMenu />

            </Fragment>
        );
    }
}

export default Index;
