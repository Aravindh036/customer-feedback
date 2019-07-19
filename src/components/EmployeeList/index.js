import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
var servicesList;
export default class EmployeeList extends Component {
    state = {
        names: ["Aaradhya", "Adhira", "Amoli", "Krisha", "Kashvi"],
        currentList: ["Aaradhya", "Adhira", "Amoli", "Krisha", "Kashvi"]
    }
    updateList = (e) => {
        var name = e.target.value;
        var nameList = this.state.names;
        if (name === "") {
            this.setState({
                currentList: nameList
            })
            return;
        }
        nameList = nameList.filter((item)=>{
            return item.includes(name)
        });
        this.setState({
            currentList: nameList
        });
    }
    render() {
        servicesList = this.state.currentList.map((item) => {
            return (<Fragment><div className="list-item" >{item}</div><hr /></Fragment>);
        })
        return (
            <div>
                <nav className="company-home-nav">
                    <span className="company-name" >ES Hospitals</span>
                    <div className="profile-area">
                        <Link to="/company/employee">Employees</Link>
                        <Link to="/company/auth">Logout</Link>
                    </div>
                </nav>
                <div className="company-home-container">
                    <div className="company-home-heading">
                        <span className="services" >Employee List</span>
                        <input onChange={this.updateList} type="text" className="theme-input margin-right" placeholder="Employee name" />
                    </div>
                    <div className="services-list" >
                        {servicesList}
                    </div>
                </div>
            </div>
        )
    }
}
