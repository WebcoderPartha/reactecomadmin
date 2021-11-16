import React, {Component, Fragment} from 'react';
import {Link, Redirect} from "react-router-dom";

class SidebarMenu extends Component {

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

                            <li className="treeview">
                                <a href="#">
                                    <i data-feather="message-circle"></i>
                                    <span>Application</span>
                                    <span className="pull-right-container">
          <i className="fa fa-angle-right pull-right"></i>
        </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="chat.html"><i className="ti-more"></i>Chat</a></li>
                                    <li><a href="calendar.html"><i className="ti-more"></i>Calendar</a></li>
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
