import React, { Component, Fragment } from 'react';
import './CompanyHome.css';
import { Link } from 'react-router-dom';

export default class CompanyHome extends Component {
    state = {
        services: ["Dancing floor", "Shooting area", "base area"]
    }
    addService = () => {
        if (document.getElementById("add-services-id").value != "") {
            var services = this.state.services;
            services.push(document.getElementById("add-services-id").value);
            this.setState({
                services: services
            });
            document.getElementById("add-services-id").value = "";
        }
    }
    render() {
        const servicesList = this.state.services.map((item) => {
            return (<Fragment><div className="list-item" >{item}</div><hr /></Fragment>);
        })
        return (
            <div className="container-bg">
                <nav className="company-home-nav">
                    <span className="company-name" >ES Hospitals</span>
                    <div className="profile-area">
                        <Link to="/company/employee">Employees</Link>
                        <Link to="/company/auth">Logout</Link>
                    </div>
                </nav>
                <div className="company-home-container">
                    <div className="company-home-heading">
                        <span className="services" >Services Available</span>
                        <div className="add-service">
                            <input className="theme-input" id="add-services-id" type="text" />
                            <button onClick={this.addService} className="theme-button margin-right" >Add Service</button>
                        </div>
                    </div>
                    <div className="services-list" >
                        {servicesList}
                    </div>
                </div>
            </div>
        )
    }
}