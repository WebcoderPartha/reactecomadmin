import React, {Component, Fragment} from 'react';
import Header from "../common/Header";
import SidebarMenu from "../common/SidebarMenu";
import CategoryCreate from '../Category/CategoryCreate'

class CategoryCreatePage extends Component {
    render() {
        return (
            <Fragment>
                <Header title={"Create Category"}/>
                <SidebarMenu/>
                <CategoryCreate />
            </Fragment>
        );
    }
}

export default CategoryCreatePage;
