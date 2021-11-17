import React, {Component, Fragment} from 'react';
import Header from "../common/Header";
import SidebarMenu from "../common/SidebarMenu";
import CategoryList from "./CategoryList";

class CategoryListPage extends Component {
    render() {
        return (
            <Fragment>
                <Header title={"Category List"}/>
                <SidebarMenu/>
                <CategoryList />
            </Fragment>
        );
    }
}

export default CategoryListPage;
