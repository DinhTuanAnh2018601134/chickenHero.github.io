import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
  import {connect} from 'react-redux';

class Pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            amout: null
        }
    }
    componentWillMount() {
        window.scrollTo(0, 0)
        var getProduct = JSON.parse(localStorage.getItem('key1'));
        var getAmout = JSON.parse(localStorage.getItem('amout'));
        this.setState({
            product: getProduct,
            amout: getAmout
        });
        
    }
    
    render() {
        return (
            <div className="container mb-3" style={{width: '50%'}}>
                <div className="row mx-auto mb-3">
                    <div className="col-4">
                    <img className="img-fluid" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_1__7.jpg" alt="" />
                    </div>
                    <div className="col-8">
                    <h5>{this.state.product.name}</h5>
                    <p>{this.state.product.price} đ</p>
                    <p>So lượng: {this.state.amout}</p>
                    <h5>Tổng tiền: {this.state.product.price * this.state.amout} đ</h5>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="col-8">
                    <form>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Họ và tên</label>
                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                        <input className="form-control" id="exampleInputPassword1" placeholder="0123456789" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                        <input className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Giao hàng tận nơi</label>
                        </div>
                        <Link to="/"><button type="button" className="btn btn-danger btn-lg btn-block"><i className="fa fa-shopping-cart">Mua ngay</i></button></Link>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        amout: state.amout
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pay);