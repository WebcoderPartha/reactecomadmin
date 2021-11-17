import React, {Component, Fragment} from 'react';
import Header from "../common/Header";
import SidebarMenu from "../common/SidebarMenu";
import CategoryEdit from "./CategoryEdit";

class CategoryEditPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: props.match.params.id
        }
    }
    render() {
        return (
            <Fragment>
                <Header title={"Update Category"}/>
                <SidebarMenu/>
                <CategoryEdit id={this.state.id} />
            </Fragment>
        );
    }
}

export default CategoryEditPage;
