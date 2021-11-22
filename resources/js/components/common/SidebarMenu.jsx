import React, {Component, Fragment} from 'react';
import {Link, Redirect} from "react-router-dom";

class SidebarMenu extends Component {
    constructor() {
        super();
        this.state = {
            activeClass: 'sidebarMenuClose'
        }
    }
    activeClass = (e) => {
        // e.preventDefault();
        // if (this.state.activeClass === 'sidebarMenuOpen'){
        //     this.setState({
        //         activeClass: 'sidebarMenuClose'
        //     })
        // }else{
        //     this.setState({
        //         activeClass: 'sidebarMenuOpen'
        //     })
        // }

        let panel = e.target.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
    render() {
        return (
            <Fragment>
                <aside className="main-sidebar">

                    <section className="sidebar">

                        <div className="user-profile">
                            <div className="ulogo">
                                <Link to="/dashboard">

                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src="../images/logo-dark.png" alt="" />
                                        <h3>Partha</h3>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <ul className="sidebar-menu" data-widget="tree">

                            <li>
                                <Link to="/dashboard">
                                    <i data-feather="pie-chart"></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/siteinfo">
                                    <i data-feather="pie-chart"></i>
                                    <span>Site Info</span>
                                </Link>
                            </li>

                            <li className="treeview">
                                <a onClick={this.activeClass} href="#">
                                    <i className="ti-layout-list-thumb"></i>
                                    <span>Category</span>
                                </a>
                                <ul className={"treeview-menu "+this.state.activeClass}>
                                    <li><Link to="/category/new"><i className="ti-more"></i>Add New</Link></li>
                                    <li><Link to="/category/list"><i className="ti-more"></i>All Category</Link></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#" onClick={this.activeClass}>
                                    <i className="ti-layout-list-thumb"></i>
                                    <span>Slider</span>
                                </a>
                                <ul className={"treeview-menu "+this.state.activeClass}>
                                    <li><Link to="/slider/add"><i className="ti-more"></i>Add New</Link></li>
                                    <li><Link to="/slider/list"><i className="ti-more"></i>All Slider</Link></li>
                                </ul>
                            </li>

                            <li className="treeview">
                                <a href="#" onClick={this.activeClass}>
                                    <i className="ti-layout-list-thumb"></i>
                                    <span>Notifications</span>
                                </a>
                                <ul className={"treeview-menu "+this.state.activeClass}>
                                    <li><Link to="/notification/add"><i className="ti-more"></i>Add New</Link></li>
                                    <li><Link to="/notification/list"><i className="ti-more"></i>All Notification</Link></li>
                                </ul>
                            </li>


                            <li>
                                <Link to="/logout">
                                    <i data-feather="lock"></i>
                                    <span>Log Out</span>
                                </Link>
                            </li>

                        </ul>
                    </section>

                    <div className="sidebar-footer">

                        <a href="#" className="link" data-toggle="tooltip" title=""
                           data-original-title="Settings" aria-describedby="tooltip92529"><i
                            className="ti-settings"></i></a>

                        <a href="mailbox_inbox.html" className="link" data-toggle="tooltip" title=""
                           data-original-title="Email"><i className="ti-email"></i></a>

                        <a href="#" className="link" data-toggle="tooltip" title=""
                           data-original-title="Logout"><i className="ti-lock"></i></a>
                    </div>
                </aside>

            </Fragment>
        );
    }
}

export default SidebarMenu;
