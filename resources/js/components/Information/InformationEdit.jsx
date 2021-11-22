import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class InformationEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
    }
    componentDidMount() {
        axios.get('/notiedit/'+this.props.id).then(response => {
            if (response.status === 200){
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error)
            }
        })
    }

    titleOnChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    updateInfo = (e) => {
        e.preventDefault();
        let title = this.state.title;
        let description = this.state.description;
        if( title.length === 0 ){
            Notification.warning('Title field is required!');
        }else if( description.length === 0 ){
            Notification.warning('Description field is required!');
        }else{

            let updateBtn = document.getElementById('updateBtn');
            updateBtn.innerHTML = "updating...";
            let data = new FormData;
            data.append('title', title);
            data.append('description', description);
            axios.post('/notiupdate/'+this.props.id, data).then(response => {
                if (response.status === 200){
                    Notification.success(response.data.success);
                    updateBtn.innerHTML = 'Update';
                }
            }).catch(error => {
                if (error.response){
                    Notification.error("Something went wrong!")
                    updateBtn.innerHTML = 'Update';
                }
            })

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
                                            <h4 className="box-title">Update Notification</h4>
                                            <div className="box-controls pull-right">
                                                <Link className="btn btn-primary" to="/notification/list">All Notification</Link>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="row">
                                                <div className="col-8 mx-auto">
                                                    <form onSubmit={this.updateInfo} id="formData">
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Title:</label>
                                                            <div className="col-md-10">
                                                                <input value={this.state.title} onChange={this.titleOnChange} className="form-control" type="text" placeholder="title"/>
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Refund Page:</label>
                                                            <div className="col-md-10">
                                                                <CKEditor
                                                                    editor={ ClassicEditor }
                                                                    data={this.state.description}
                                                                    onChange={ ( event, editor ) => {
                                                                        const data = editor.getData();
                                                                        this.setState({
                                                                            description:data
                                                                        })
                                                                    } }
                                                                />
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

export default InformationEdit;
