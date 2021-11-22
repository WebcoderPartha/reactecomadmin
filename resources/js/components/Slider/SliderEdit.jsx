import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class SliderEdit extends Component {
    constructor() {
        super();
        this.state = {
            slider_image: '',
            newImage: ''
        }
    }
    componentDidMount() {
        axios.get('/slider/'+this.props.id).then(response => {
            if (response.status === 200){
                this.setState({
                    slider_image: response.data.slider_image
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error.response)
            }
        });
    }

    updateSlider = (e) => {
        e.preventDefault();
        let slider_image = this.state.slider_image;
        let newImage = this.state.newImage;

        let updateBtn = document.getElementById('updateBtn');
        updateBtn.innerHTML = 'Updating...';
        let data = new FormData;
        data.append('slider_image', slider_image);
        data.append('newImage', newImage);
        axios.post('/sliderupdate/'+this.props.id, data).then(response => {
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
                                            <h4 className="box-title">Update Slider</h4>
                                            <div className="box-controls pull-right">
                                                <Link className="btn btn-primary" to="/slider/list">All Slider</Link>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="row">
                                                <div className="col-8 mx-auto">
                                                    <form id="formData" onSubmit={this.updateSlider}>

                                                        <div className="form-group row">
                                                            <label className="col-form-label col-lg-2">Slider Image</label>
                                                            <div className="col-lg-6">
                                                                <div className="custom-file">
                                                                    <input onChange={this.selectImage} type="file" className="custom-file-input" id="customFile" />
                                                                    <label className="custom-file-label" htmlFor="customFile">Choose
                                                                        file</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <img src={'/'+this.state.slider_image} id="preview" width={60} alt=""/>
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

export default SliderEdit;
