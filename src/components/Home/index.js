import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css'
export default class Home extends Component {
    render() {
        return (
            <div className="home-container-1">
                <div className="home-heading">
                    Are You a
                </div>
                <div className="flex-container">
                    <Link to="/company/auth" className="list-item">Company</Link>
                    <Link to="/employee/auth" className="list-item">Member Staff</Link>
                    <Link to="/customer/auth" className="list-item">Customer</Link>
                </div>
            </div>
        )
    }
}
