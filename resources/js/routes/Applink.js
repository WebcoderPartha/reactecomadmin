import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashboardPage from "../components/Dashboard/DashboardPage";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Recovery from "../components/Auth/Recovery";
import ResetPassword from "../components/Auth/ResetPassword";
import Logout from "../components/Auth/Logout";
import CategoryCreatePage from "../components/Category/CategoryCreatePage";
import CategoryEditPage from "../components/Category/CategoryEditPage";
import CategoryListPage from "../components/Category/CategoryListPage";

class Applink extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" render={(props)=> <Login {...props} key={Date.now()} /> } />
                        <Route exact path="/logout" render={(props)=> <Logout {...props} key={Date.now()} /> } />
                        <Route exact path="/register" render={(props)=> <Register {...props} key={Date.now()} /> } />
                        <Route exact path="/recovery" render={(props)=> <Recovery {...props} key={Date.now()} /> } />
                        <Route exact path="/reset" render={(props)=> <ResetPassword {...props} key={Date.now()} /> } />
                        <Route exact path="/dashboard" render={(props)=> <DashboardPage {...props} key={Date.now()} /> } />
                        <Route exact path="/category/list" render={(props)=> <CategoryListPage {...props} key={Date.now()} /> } />
                        <Route exact path="/category/new" render={(props)=> <CategoryCreatePage {...props} key={Date.now()} /> } />
                        <Route exact path="/category/edit/:id" render={(props)=> <CategoryEditPage {...props} key={Date.now()} /> } />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default Applink;

