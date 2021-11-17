import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class CategoryEdit extends Component {
    constructor() {
        super();
        this.state = {
            category_name: '',
            category_image: '',
            newImage: ''
        }
        this.catNameOnChange = this.catNameOnChange.bind(this)
    }
    catNameOnChange(e){
        let category_name = e.target.value;
        this.setState({
            category_name:category_name
        })
    }
    componentDidMount() {
        axios.get('/catedit/'+this.props.id).then(response => {
            if (response.status === 200){
                this.setState({
                    category_name: response.data.category_name,
                    category_image: response.data.category_image,
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error.response)
            }
        });
    }

    updateCategory = (e) => {
        e.preventDefault();
        let category_name = this.state.category_name;
        let category_image = this.state.category_image;
        let newImage = this.state.newImage;
        if (category_name.length === 0){
            Notification.warning('Category name is required!');
        }else{
            let updateBtn = document.getElementById('updateBtn');
            updateBtn.innerHTML = 'Updating...';
            let data = new FormData;
            data.append('category_name', category_name);
            data.append('category_image', category_image);
            data.append('newImage', newImage);
            axios.post('/catupdate/'+this.props.id, data).then(response => {
                if (response.status === 200){
                    Notification.success(response.data.success);
                    updateBtn.innerHTML = 'Update';
                }
            }).catch(error => {
                if (error.response){
                    Notification.error("Something went wrong!");
                    updateBtn.innerHTML = 'Update';
                }
            });
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
                    newImage: event.target.result
                });
                document.getElementById('preview').src = event.target.result;
            }
            loader.readAsDataURL(file);
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
                                            <h4 className="box-title">Update Category</h4>
                                            <div className="box-controls pull-right">
                                                <Link className="btn btn-primary" to="/category/list">All Category</Link>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="row">
                                                <div className="col-8 mx-auto">
                                                    <form id="formData" onSubmit={this.updateCategory}>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Category Name</label>
                                                            <div className="col-md-10">
                                                                <input value={this.state.category_name} onChange={this.catNameOnChange} className="form-control" type="text" name="Category Name" />
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
                                                                <img src={'/'+this.state.category_image} id="preview" width={60} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="col-2"></div>
                                                            <div className="col-10">
                                                                <button id="updateBtn" type="submit"
                                                                        className="btn btn-rounded btn-success mb-5">Update
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

export default CategoryEdit;
