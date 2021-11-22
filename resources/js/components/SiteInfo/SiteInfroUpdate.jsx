import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class SiteInfroUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facebook_link: '',
            twitter_link: '',
            linkedin_link: '',
            address: '',
            ios_app_link: '',
            adnroid_app_link: '',
            copyright_text: '',
            about_page: '',
            company_page: '',
            purchase_page: '',
            privacy_page: '',
            refund_page: '',
        };
    }
    componentDidMount() {
        axios.get('/getsiteinfo').then(response => {
            if (response.status === 200){
                this.setState({
                    facebook_link: response.data.facebook_link,
                    twitter_link: response.data.twitter_link,
                    linkedin_link: response.data.linkedin_link,
                    address: response.data.address,
                    ios_app_link: response.data.ios_app_link,
                    adnroid_app_link: response.data.adnroid_app_link,
                    copyright_text: response.data.copyright_text,
                    about_page: response.data.about_page,
                    company_page: response.data.company_page,
                    purchase_page: response.data.purchase_page,
                    privacy_page: response.data.privacy_page,
                    refund_page: response.data.refund_page,
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error);
            }
        })
    }

    facebookOnChange = e => {
        this.setState({
            facebook_link: e.target.value
        })
    }
    twitterOnChange = e => {
        this.setState({
            twitter_link: e.target.value
        })
    }
    linkedinOnChange = e => {
        this.setState({
            linkedin_link: e.target.value
        })
    }
    iphoneOnChange = e => {
        this.setState({
            ios_app_link: e.target.value
        })
    }
    androidOnChange = e => {
        this.setState({
            adnroid_app_link: e.target.value
        })
    }

    updateSiteInfo = (e) => {
        e.preventDefault();
        let facebook_link = this.state.facebook_link;
        let twitter_link = this.state.twitter_link;
        let linkedin_link = this.state.linkedin_link;
        let address = this.state.address;
        let ios_app_link = this.state.ios_app_link;
        let adnroid_app_link = this.state.adnroid_app_link;
        let copyright_text = this.state.copyright_text;
        let about_page = this.state.about_page;
        let company_page = this.state.company_page;
        let purchase_page = this.state.purchase_page;
        let privacy_page = this.state.privacy_page;
        let refund_page = this.state.refund_page;
        if( facebook_link.length === 0 ){
            Notification.warning('Facebook field is required!');
        }else if( twitter_link.length === 0 ){
            Notification.warning('Twitter field is required!');
        }else if( linkedin_link.length === 0 ){
            Notification.warning('LinkedIn field is required!');
        }else if( address.length === 0 ){
            Notification.warning('Address field is required!');
        }else if( ios_app_link.length === 0 ){
            Notification.warning('IOS field is required!');
        }else if( adnroid_app_link.length === 0 ){
            Notification.warning('Android field is required!');
        }else if( copyright_text.length === 0 ){
            Notification.warning('Copyright field is required!');
        }else if( about_page.length === 0 ){
            Notification.warning('About field is required!');
        }else if( company_page.length === 0 ){
            Notification.warning('Company field is required!');
        }else if( purchase_page.length === 0 ){
            Notification.warning('Purchase field is required!');
        }else if( privacy_page.length === 0 ){
            Notification.warning('Privacy field is required!');
        }else if( refund_page.length === 0 ){
            Notification.warning('Refund field is required!');
        }else{

            let updateBtn = document.getElementById('updateBtn');
            updateBtn.innerHTML = "Updating...";
            let data = new FormData;
            data.append('facebook_link', facebook_link);
            data.append('twitter_link', twitter_link);
            data.append('linkedin_link', linkedin_link);
            data.append('address', address);
            data.append('ios_app_link', ios_app_link);
            data.append('adnroid_app_link', adnroid_app_link);
            data.append('copyright_text', copyright_text);
            data.append('about_page', about_page);
            data.append('company_page', company_page);
            data.append('purchase_page', purchase_page);
            data.append('privacy_page', privacy_page);
            data.append('refund_page', refund_page);
            axios.post('/updatesiteinfo', data).then(response => {
                if (response.status === 200){
                    Notification.success(response.data.success);
                    updateBtn.innerHTML = 'Update';
                }
            }).catch(error => {
                if (error.response){
                    updateBtn.innerHTML = 'Update';
                    console.log(error);
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
                                            <h4 className="box-title">Site Info</h4>
                                            <div className="box-controls pull-right">
                                                <Link className="btn btn-primary" to="/dashboard">Dashboard</Link>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="row">
                                                <div className="col-8 mx-auto">
                                                    <form onSubmit={this.updateSiteInfo} id="formData">
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Facebook Link:</label>
                                                            <div className="col-md-10">
                                                                <input value={this.state.facebook_link} onChange={this.facebookOnChange} className="form-control" type="text" placeholder="www.facebook.com"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Twitter Link:</label>
                                                            <div className="col-md-10">
                                                                <input value={this.state.twitter_link} onChange={this.twitterOnChange} className="form-control" type="text" placeholder="www.twitter.com"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">LinkedIn Link:</label>
                                                            <div className="col-md-10">
                                                                <input onChange={this.linkedinOnChange} className="form-control" type="text" placeholder="www.linkedin.com"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">iPhone App Link:</label>
                                                            <div className="col-md-10">
                                                                <input value={this.state.ios_app_link} onChange={this.iphoneOnChange} className="form-control" type="text" placeholder="www.iphone.com"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Android App Link:</label>
                                                            <div className="col-md-10">
                                                                <input value={this.state.adnroid_app_link} onChange={this.androidOnChange} className="form-control" type="text" placeholder="www.iphone.com"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Address:</label>
                                                            <div className="col-md-10">
                                                                <CKEditor
                                                                    editor={ ClassicEditor }
                                                                    data={this.state.address}
                                                                    onChange={ ( event, editor ) => {
                                                                        const data = editor.getData();
                                                                        this.setState({
                                                                            address:data
                                                                        })
                                                                    } }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Copyright Text:</label>
                                                            <div className="col-md-10">
                                                                <CKEditor
                                                                    editor={ ClassicEditor }
                                                                    data={this.state.copyright_text}
                                                                    onChange={ ( event, editor ) => {
                                                                        const data = editor.getData();
                                                                        this.setState({
                                                                            copyright_text:data
                                                                        })
                                                                    } }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">About Page:</label>
                                                            <div className="col-md-10">
                                                                <CKEditor
                                                                    editor={ ClassicEditor }
                                                                    data={this.state.about_page}
                                                                    onChange={ ( event, editor ) => {
                                                                        const data = editor.getData();
                                                                        this.setState({
                                                                            about_page:data
                                                                        })
                                                                    } }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Company Page:</label>
                                                            <div className="col-md-10">
                                                                <CKEditor
                                                                    editor={ ClassicEditor }
                                                                    data={this.state.company_page}
                                                                    onChange={ ( event, editor ) => {
                                                                        const data = editor.getData();
                                                                        this.setState({
                                                                            company_page:data
                                                                        })
                                                                    } }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Purchase Page:</label>
                                                            <div className="col-md-10">
                                                                <CKEditor
                                                                    editor={ ClassicEditor }
                                                                    data={this.state.purchase_page}
                                                                    onChange={ ( event, editor ) => {
                                                                        const data = editor.getData();
                                                                        this.setState({
                                                                            purchase_page:data
                                                                        })
                                                                    } }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Privacy Page:</label>
                                                            <div className="col-md-10">
                                                                <CKEditor
                                                                    editor={ ClassicEditor }
                                                                    data={this.state.privacy_page}
                                                                    onChange={ ( event, editor ) => {
                                                                        const data = editor.getData();
                                                                        this.setState({
                                                                            privacy_page:data
                                                                        })
                                                                    } }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Refund Page:</label>
                                                            <div className="col-md-10">
                                                                <CKEditor
                                                                    editor={ ClassicEditor }
                                                                    data={this.state.refund_page}
                                                                    onChange={ ( event, editor ) => {
                                                                        const data = editor.getData();
                                                                        this.setState({
                                                                            refund_page:data
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

export default SiteInfroUpdate;
