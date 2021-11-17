import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            getCategory: []
        }
    }

    componentDidMount() {
        axios.get('/getallcat').then(response => {
            if (response.status === 200){
                this.setState({
                    getCategory:response.data
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error.response)
            }
        });
    }
    catDelete = (e) => {
        let id = e.target.getAttribute('data-id');
        const oldCat = this.state.getCategory;
        const newCat = oldCat.filter(cat => {
            return cat.id != id;
        })
        axios.get('/delcat/'+id).then(response => {
            if (response.status === 200){
                Notification.success(response.data.success)
                this.setState({
                    getCategory:newCat
                });
            }
        }).catch(error => {
            if (error.response){
                console.log(error.response)
            }
        });
    }

    render() {
        const getcat = this.state.getCategory;
        if (getcat.length > 0){
            const myview = getcat.map((category, idx)=> {
                return (
                    <tr key={idx.toString()}>
                        <td>{idx + 1}</td>
                        <td>{category.category_name}</td>
                        <td><img src={category.category_image} width={80} alt=""/></td>
                        <td><span className="badge badge-pill badge-success">Published</span>
                        </td>
                        <td>
                            <Link className="btn btn-info btn-sm" to={"/category/edit/"+category.id}><i className="ti-pencil-alt"></i></Link>&nbsp; &nbsp;
                            <button data-id={category.id} onClick={this.catDelete} className="btn btn-danger btn-sm"><i className="ti-trash"></i></button>
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
                                                <h4 className="box-title">All Category</h4>
                                                <div className="box-controls pull-right">
                                                    <Link className="btn btn-primary" to="/category/new">Add Category</Link>
                                                </div>
                                            </div>
                                            <div className="box-body no-padding">
                                                <div className="table-responsive">
                                                    <table className="table table-hover">
                                                        <tbody>
                                                        <tr>
                                                            <th>SL</th>
                                                            <th>Category Name</th>
                                                            <th>Image</th>
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
                                                <h4 className="box-title">All Category</h4>
                                                <div className="box-controls pull-right">
                                                    <Link className="btn btn-primary" to="/category/new">Add Category</Link>
                                                </div>
                                            </div>
                                            <div className="box-body no-padding">
                                                <div className="table-responsive">
                                                    <h4>No category found!</h4>
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

export default CategoryList;
