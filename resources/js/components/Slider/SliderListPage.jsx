import React, {Component, Fragment} from 'react';
import Header from "../common/Header";
import SidebarMenu from "../common/SidebarMenu";
import SliderList from "./SliderList";

class SliderListPage extends Component {
    render() {
        return (
            <Fragment>
                <Header title={"Slider List"}/>
                <SidebarMenu/>
                <SliderList />
            </Fragment>
        );
    }
}

export default SliderListPage;
