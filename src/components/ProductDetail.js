import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
  import {connect} from 'react-redux';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            amout : null,
            link: null
        }
    }
    componentWillMount() {
        window.scrollTo(0, 0)
        var getProduct = JSON.parse(localStorage.getItem('key1'));
        this.setState({
            product: getProduct
        });
    }
    isChange = (event) => {
        const sl = event.target.value
            this.setState({
                amout: sl
            });
    }
    getAmoutPay = (event) => {
        if(this.state.amout === null || this.state.amout === 0){
            event.preventDefault();
            alert('Phải nhập số lượng');
        }
        else if(this.state.amout > this.state.product.amout){
            console.log(this.state.amout)
            this.setState({
                amout: null
            });
            event.preventDefault();
            alert('Số lượng mua phải nhỏ hơn ' + this.state.product.amout);
        }
        else{
            localStorage.setItem('amout',this.state.amout);
            this.props.getAmout(this.state.amout);
        }
        console.log(this.state.amout)
    }
    render() {
        return (
           <div>
               <div className="container mb-5">
                <div className="row">
                <div className="col-sm-4">
                    <img className="img-fluid" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_1__7.jpg" alt="" />
                </div>
                <div className="col-sm-4">
                    <h4>{this.state.product.name}</h4>
                    <h5>{this.state.product.price} đ</h5>
                    <h4>Mô tả</h4>
                    <p>{this.state.product.description}</p>
                    <h5>Số lượng còn: {this.state.product.amout}</h5>
                    <div className="form-group">
                    <label>nhap so luong</label>
                    <input  onChange={(event) => this.isChange(event)} type="number" className="form-control" aria-describedby="helpId"/>
                    </div>
                    <Link to="/Pay"><button onClick={(event) => this.getAmoutPay(event)} type="button" id="soLuongMua" className="btn btn-danger btn-lg btn-block"><i className="fa fa-shopping-cart">Mua ngay</i></button></Link>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Thông số kỹ thuật</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Kích thước màn hình <span className="float-right">{this.state.product.screenSize}</span></li>
                        <li className="list-group-item">Công nghệ màn hình <span className="float-right">{this.state.product.screenTechnology}</span></li>
                        <li className="list-group-item">Chipset <span className="float-right">{this.state.product.chipSet}</span></li>
                        <li className="list-group-item">RAM <span className="float-right">{this.state.product.ram}</span></li>
                        <li className="list-group-item">Pin <span className="float-right">{this.state.product.pin}</span></li>
                        <li className="list-group-item">Hệ điều hành <span className="float-right">{this.state.product.os}</span></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="row mb-5">
                <div className="col-12">
                    <h4 className="text-center">Các sản phẩm liên quan</h4>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-3 mb-3">
                    <div className="card">
                    <a href="/"><img className="card-img-top img-fluid" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_1__7.jpg" alt="" /></a>
                    <div className="card-body">
                        <a href="/">iPhone 12 Pro max</a>
                        <p className="card-text">29.000.000</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3">
                    <div className="card">
                    <a href="/"><img className="card-img-top img-fluid" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_1__7.jpg" alt="" /></a>
                    <div className="card-body">
                        <a href="/">iPhone 12 Pro max</a>
                        <p className="card-text">29.000.000</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3">
                    <div className="card">
                    <a href="productDetail.html"><img className="card-img-top img-fluid" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_1__7.jpg" alt="" /></a>
                    <div className="card-body">
                        <a href="/">iPhone 12 Pro max</a>
                        <p className="card-text">29.000.000</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3">
                    <div className="card">
                    <a href="/"><img className="card-img-top img-fluid" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_1__7.jpg" alt="" /></a>
                    <div className="card-body">
                        <a href="/">iPhone 12 Pro max</a>
                        <p className="card-text">29.000.000</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
           </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAmout: (amout1) => {
            dispatch({
                type: "GET_AMOUT",
                amout1
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);