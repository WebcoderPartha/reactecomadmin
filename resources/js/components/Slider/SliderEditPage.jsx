import React, {Component, Fragment} from 'react';
import Header from "../common/Header";
import SidebarMenu from "../common/SidebarMenu";
import SliderEdit from "./SliderEdit";

class SliderEditPage extends Component {
    constructor(props) {
        super();
        this.state = {
            id:props.match.params.id
        }
    }
    render() {
        return (
            <Fragment>
                <Header title={"Slider Update"}/>
                <SidebarMenu/>
                <SliderEdit id={this.state.id} />
            </Fragment>
        );
    }
}

export default SliderEditPage;
