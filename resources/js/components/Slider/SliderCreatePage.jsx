import React, {Component, Fragment} from 'react';
import Header from "../common/Header";
import SidebarMenu from "../common/SidebarMenu";
import SliderCreate from "./SliderCreate";


class SliderCreatePage extends Component {
    render() {
        return (
            <Fragment>
                <Header title={"Slider Create"}/>
                <SidebarMenu/>
                <SliderCreate />
            </Fragment>
        );
    }
}

export default SliderCreatePage;
