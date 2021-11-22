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
import SliderListPage from "../components/Slider/SliderListPage";
import SliderCreatePage from "../components/Slider/SliderCreatePage";
import SliderEditPage from "../components/Slider/SliderEditPage";
import SiteInfo from "../components/SiteInfo/SiteInfo";
import InformationListPage from "../components/Information/InformationListPage";
import InformationCreatePage from "../components/Information/InformationCreatePage";
import InformationEditPage from "../components/Information/InformationEditPage";

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

                        <Route exact path="/slider/list" render={(props)=> <SliderListPage {...props} key={Date.now()} /> } />
                        <Route exact path="/slider/add" render={(props)=> <SliderCreatePage {...props} key={Date.now()} /> } />
                        <Route exact path="/slider/edit/:id" render={(props)=> <SliderEditPage {...props} key={Date.now()} /> } />

                        <Route exact path="/siteinfo" render={(props)=> <SiteInfo {...props} key={Date.now()} /> } />

                        <Route exact path="/notification/list" render={(props)=> <InformationListPage {...props} key={Date.now()} /> } />
                        <Route exact path="/notification/add" render={(props)=> <InformationCreatePage {...props} key={Date.now()} /> } />
                        <Route exact path="/notification/edit/:id" render={(props)=> <InformationEditPage {...props} key={Date.now()} /> } />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default Applink;

