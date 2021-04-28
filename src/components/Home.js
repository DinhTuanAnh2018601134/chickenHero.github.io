import React, { Component } from 'react';
// import {
//     Link
//   } from "react-router-dom";
import HomeItem from './HomeItem';
import {phoneData} from './FirebaseConnect';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataHome: []
        }
    }
    componentWillMount() {
        window.scrollTo(0, 0)
        phoneData.on('value',(items) => {
            var arrayData = [];
            items.forEach(item => {
                const id = item.val().id;
                const name = item.val().Name;
                const price = item.val().Price;
                const image = item.val().Image;
                const amout = item.val().Amout;
                const chipSet = item.val().ChipSet;
                const ram = item.val().RAM;
                const description = item.val().Description;
                const pin = item.val().Pin;
                const screenSize = item.val().ScreenSize;
                const screenTechnology = item.val().ScreenTechnology;
                const os = item.val().OS;
                arrayData.push({
                    id : id,
                    name: name,
                    price: price,
                    image: image,
                    amout : amout,
                    chipSet : chipSet,
                    ram : ram,
                    description : description,
                    pin : pin,
                    screenSize : screenSize,
                    screenTechnology : screenTechnology,
                    os : os
                })
            });
            this.setState({
                dataHome: arrayData
            });
            
        })
    }
    getData = () => {
        if(this.state.dataHome){
            return this.state.dataHome.map((value,key) => {
                return <HomeItem
                    key = {key}
                    id = {value.id}
                    name = {value.name}
                    price = {value.price}
                    image = {value.image}
                    product = {value}
                />
            })
        }
    }
    
    render() {
        return (
            <div className="content container">
                <div className="content-title row mx-auto">
                    <h4 className="mb-3 col-sm-3">ĐIỆN THOẠI NỔI BẬT</h4>
                    <div className="col-sm-9 float-right">
                    <ul className="float-right">
                    <li><a href="/" className="btn btn-light ml-5">Iphone</a></li>
                        <li><a href="/" className="btn btn-light ml-5">Samsung</a></li>
                        <li><a href="/" className="btn btn-light ml-5">Xiaomi</a></li>
                        <li><a href="/" className="btn btn-light ml-5">Nokia</a></li>
                        <li><a href="/" className="btn btn-light ml-5">Vsmart</a></li>
                    </ul>
                    </div>
                </div>
                <div className="row card-group">
                    {this.getData()}
                </div>
            </div>
        );
    }
}

export default Home;