import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";


class CategoryCreate extends Component {
    constructor() {
        super();
        this.state = {
            category_name: '',
            category_image: ''
        }
    }
    selectImage = (e) => {
        let file = e.target.files[0];
        if (file.size > 1048576){
            Notification.error("Upload image must be less then 1MB!")
        }else{
            let loader = new FileReader();
            loader.onload = event => {
                this.setState({
                    category_image: event.target.result
                });
                document.getElementById('preview').src = event.target.result;
            }
            loader.readAsDataURL(file);
        }
    }
    storeCategory = (e) => {
        e.preventDefault();
        let category_name = this.state.category_name;
        let category_image = this.state.category_image;
        if (category_name.length === 0){
            Notification.warning('Category name is required!');
        }else{
            let addBtn = document.getElementById('addBtn');
            addBtn.innerHTML = 'Adding...';
            let data = new FormData;
            data.append('category_name', category_name);
            data.append('category_image', category_image);
            axios.post('/storecat', data).then(response => {
                if (response.status === 200){
                    document.getElementById('formData').reset();
                    this.setState({
                        category_name: '',
                        category_image: ''
                    })
                    document.getElementById('preview').src = '';
                    Notification.success(response.data.success);
                    addBtn.innerHTML = 'Add';
                }
            }).catch(error => {
                if (error.response){
                    Notification.error("Something went wrong!");
                    addBtn.innerHTML = 'Add';
                }
            });
        }
    }
    render() {
        return (
            <Fragment>
                <div className="content-wrapper">
                    <div className="container-full">
                        <section className="content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="box">
                                        <div className="box-header with-border">
                                            <h4 className="box-title">Create Category</h4>
                                            <div className="box-controls pull-right">
                                                <Link className="btn btn-primary" to="/category/list">All Category</Link>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="row">
                                                <div className="col-8 mx-auto">
                                                    <form id="formData" onSubmit={this.storeCategory}>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Category Name</label>
                                                            <div className="col-md-10">
                                                                <input onChange={e=>this.setState({category_name:e.target.value})} className="form-control" type="text" name="Category Name" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-lg-2">Image</label>
                                                            <div className="col-lg-6">
                                                                <div className="custom-file">
                                                                    <input onChange={this.selectImage} type="file" className="custom-file-input" id="customFile" />
                                                                    <label className="custom-file-label" htmlFor="customFile">Choose
                                                                        file</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <img src="" id="preview" width={60} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-2"></div>
                                                            <div className="col-10">
                                                                <button id="addBtn" type="submit"
                                                                        className="btn btn-rounded btn-success mb-5">Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
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

export default CategoryCreate;
