import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class SliderList extends Component {
    constructor() {
        super();
        this.state = {
            getSlider: []
        }
    }

    componentDidMount() {
        axios.get('/getallslider').then(response => {
            if (response.status === 200){
                this.setState({
                    getSlider:response.data,
                })
            }
        }).catch(error => {
            if (error.response){
                console.log(error.response)
            }
        });
    }
    sliderDelete = (e) => {
        let id = e.target.getAttribute('data-id');
        const oldSlider = this.state.getSlider;
        const newSlider = oldSlider.filter(slider => {
            return slider.id != id;
        })
        axios.get('/delslider/'+id).then(response => {
            if (response.status === 200){
                Notification.success(response.data.success)
                this.setState({
                    getSlider:newSlider
                });
            }
        }).catch(error => {
            if (error.response){
                console.log(error.response)
            }
        });
    }

    render() {
        const getSlider = this.state.getSlider;
        if (getSlider.length > 0){
            const myview = getSlider.map((slider, idx)=> {
                return (
                    <tr key={idx.toString()}>
                        <td>{idx + 1}</td>
                        <td><img src={slider.slider_image} width={80} alt=""/></td>
                        <td><span className="badge badge-pill badge-success">Published</span>
                        </td>
                        <td>
                            <Link className="btn btn-info btn-sm" to={"/slider/edit/"+slider.id}><i className="ti-pencil-alt"></i></Link>&nbsp; &nbsp;
                            <button data-id={slider.id} onClick={this.sliderDelete} className="btn btn-danger btn-sm"><i className="ti-trash"></i></button>
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
                                                <h4 className="box-title">All Slider</h4>
                                                <div className="box-controls pull-right">
                                                    <Link className="btn btn-primary" to="/slider/add">Add Slider</Link>
                                                </div>
                                            </div>
                                            <div className={"box-body no-padding "+this.state.mainDiv}>
                                                <div className="table-responsive">
                                                    <table className="table table-hover">
                                                        <tbody>
                                                        <tr>
                                                            <th>SL</th>
                                                            <th>Slider Image</th>
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
                                                    <Link className="btn btn-primary" to="/slider/add">Add Slider</Link>
                                                </div>
                                            </div>
                                            <div className="box-body no-padding">
                                                <div className="table-responsive">
                                                    <h4 className="text-center">No slider found!</h4>
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

export default SliderList;
