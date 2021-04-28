import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className=" footer container-fluid">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-4">
                        <h4 className="mb-5 mt-2">Quick link</h4>
                    </div>
                    <div className="col-sm-4">
                        <h4 className="mb-5 mt-2 text-center">Contact</h4>
                    </div>
                    <div className="col-sm-4">
                        <h4 className="mb-4 mt-2 text-right">Location</h4>
                    </div>
                    </div>
                    <div className="row mb-5">
                    <div className="col-sm-2">
                        <ul className="menu-footer">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="">Iphone</Link></li>
                        <li><Link to="">Samsung</Link></li>
                        <li><Link to="">Xiaomi</Link></li>
                        <li><Link to="">Nokia</Link></li>
                        <li><Link to="">Vsmart</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <ul className="menu-footer">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="">Iphone</Link></li>
                        <li><Link to="">Samsung</Link></li>
                        <li><Link to="">Xiaomi</Link></li>
                        <li><Link to="">Nokia</Link></li>
                        <li><Link to="">Vsmart</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <ul className="contact">
                            <li><a href="/" className="mr-5"><i className="fa fa-facebook" /></a></li>
                            <li><a href="/" className="mr-5"><i className="fa fa-instagram" /></a></li>
                            <li><a href="/" className="mr-5"><i className="fa fa-youtube" /></a></li>
                            <li><a href="/" ><i className="fa fa-google-plus" /></a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 text-right">
                        <img src="bd.png" alt="" />
                        <p>1040,Angelsgarden,North Texas,United States.</p>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;