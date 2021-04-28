import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-danger mb-3">
                <Link to="/" className="navbar-brand text-white mr-5" >ChickenHero <img style={{width: '1.25rem', height: '1.25rem'}} src="logo1.png" alt="" /></Link>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item mr-5">
                            <a className="nav-link text-white" href="/">Apple</a>
                        </li>
                        <li className="nav-item  mr-5">
                            <a className="nav-link text-white" href="/">Samsung</a>
                        </li>
                        <li className="nav-item  mr-5">
                            <a className="nav-link text-white" href="/">Xiaomi</a>
                        </li>
                        <li className="nav-item  mr-5">
                            <a className="nav-link text-white" href="/">Nokia</a>
                        </li>
                        <li className="nav-item  mr-5">
                            <a className="nav-link text-white" href="/">Vsmart</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-white dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="/">Action 1</a>
                            <a className="dropdown-item" href="/">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        );
    }
}

export default Nav;