import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import parse from 'html-react-parser';

class InformationList extends Component {
    constructor() {
        super();
        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        axios.get('/getnotification').then(response => {
            if (response.status === 200){
                this.setState({
                    notifications:response.data,
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error.response)
            }
        });
    }
    NotiDelete = (e) => {
        let id = e.target.getAttribute('data-id');
        const oldNoti = this.state.notifications;
        const newNoti = oldNoti.filter(noti => {
            return noti.id != id;
        })
        axios.delete('/notidelete/'+id).then(response => {
            if (response.status === 200){
                Notification.success(response.data.success)
                this.setState({
                    notifications:newNoti
                });
            }
        }).catch(error => {
            if (error.response){
                console.log(error.response)
            }
        });
    }

    render() {
        const getNoti = this.state.notifications;
        if (getNoti.length > 0){
            const myview = getNoti.map((noti, idx)=> {
                return (
                    <tr key={idx.toString()}>
                        <td>{idx + 1}</td>
                        <td>{noti.title}</td>
                        <td>{parse(noti.description)}</td>
                        <td><span className="badge badge-pill badge-success">Published</span>
                        </td>
                        <td>
                            <Link className="btn btn-info btn-sm" to={"/notification/edit/"+noti.id}><i className="ti-pencil-alt"></i></Link>&nbsp; &nbsp;
                            <button type="button" data-id={noti.id} onClick={this.NotiDelete} className="btn btn-danger btn-sm"><i className="ti-trash"></i></button>
                        </td>
                    </tr>
                )
            })
            return (
                <Fragment>

                    <div className="content-wrapper">
                        <div className="container-full">
                            <section className="content">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="box">
                                            <div className="box-header with-border">
                                                <h4 className="box-title">All Notifications</h4>
                                                <div className="box-controls pull-right">
                                                    <Link className="btn btn-primary" to="/notification/add">Add Notification</Link>
                                                </div>
                                            </div>
                                            <div className={"box-body no-padding "+this.state.mainDiv}>
                                                <div className="table-responsive">
                                                    <table className="table table-hover">
                                                        <tbody>
                                                        <tr>
                                                            <th>SL</th>
                                                            <th>Title</th>
                                                            <th>Description</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                        {myview}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </Fragment>
            );
        }else{
            return (
                <Fragment>
                    <div className="content-wrapper">
                        <div className="container-full">
                            <section className="content">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="box">
                                            <div className="box-header with-border">
                                                <h4 className="box-title">All Notification</h4>
                                                <div className="box-controls pull-right">
                                                    <Link className="btn btn-primary" to="/notification/new">Add Notification</Link>
                                                </div>
                                            </div>
                                            <div className="box-body no-padding">
                                                <div className="table-responsive">
                                                    <h4>No notifications found!</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </Fragment>
            );
        }
    }
}

export default InformationList;
