import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
// import {phoneData} from './FirebaseConnect'
import {connect} from 'react-redux';


class HomeItem extends Component {
    getProductDetail = () =>{
        if(localStorage.getItem('key1')){
            localStorage.removeItem('key1');
            localStorage.setItem('key1',JSON.stringify(this.props.product));
        }
        localStorage.setItem('key1',JSON.stringify(this.props.product));
        this.props.getDataDetail(this.props.product)
    }
    render() {
        
        return (
            <div className="col-sm-3 mb-3">
                <div className="card">
                    <Link to="/ProductDetail"><img onClick = {()=>this.getProductDetail()} className="card-img-top img-fluid" src={this.props.image} alt="" /></Link>
                    <div className="card-body">
                    <Link to="/ProductDetail" onClick = {()=>this.getProductDetail()}>{this.props.name}</Link>
                    <p className="card-text">{this.props.price}</p>
                    </div>
                    <div className="text-center mb-1">
                    <Link to="/ProductDetail"><button onClick = {()=>this.getProductDetail()} type="button" className="btn btn-danger"><i className="fa fa-shopping-cart">Mua ngay</i></button></Link>
                    <Link to="/ProductDetail"><button onClick = {()=>this.getProductDetail()} type="button" className="btn btn-danger"><i className="fa fa-shopping-cart">Mua luôn</i></button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDataDetail: (productDetail) => {
            dispatch({
                type: "GET_DATA_DETAIL",
                productDetail
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeItem);