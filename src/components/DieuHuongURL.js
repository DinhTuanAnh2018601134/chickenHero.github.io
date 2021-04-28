import React, { Component } from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import Banner from './Banner';
import Home from './Home';
import Pay from './Pay';
import ProductDetail from './ProductDetail';

class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <Route path="/ProductDetail">
                            <ProductDetail/>
                        </Route>
                        <Route path="/pay">
                            <Pay/>
                        </Route>
                        <Route  path="/">
                            <Banner/>
                            <Home/>
                        </Route>
                    </Switch>
                </div>
        );
    }
}

export default DieuHuongURL;