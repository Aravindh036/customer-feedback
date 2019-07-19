import React, { Component, Fragment } from 'react';
import "./Consumer.css";
import { Link ,withRouter} from 'react-router-dom';
import back from '../../assets/left-arrow.svg';
import Modal from '../Modal';
var servicesList,companyServices;
class Consumer extends Component {
    state = {
        currentList: ["Hospitals", "IT"],
        hospitalList: ["ES Hospital", "MedWay Hospital", "Appolo Hospital"],
        hospitalServices:["General","Eye","ECG","Ortho",],
        ITList: ["Kaar Technologies", "TCS", "CTS", "Sutherland"],
        home: true,
        Hospital: false,
        IT: false
    }
    clearOption=()=>{
        this.setState({
            home:true,
            Hospital:false,
            IT:false
        })
    }
    changeHandler = (e) => {
        var text = e.target.innerHTML;
        console.log(text);
        if (text.includes("Hospitals")) {
            this.setState({
                home: false,
                Hospital: true
            });
        } else if (text.includes("IT")) {
            this.setState({
                home: false,
                IT: true
            });
        }
    }
    subscribe=(e)=>{
        var value = e.target.innerHTML;
        e.target.classList.toggle("subscribed");
        if(value=="Subscribe"){
            e.target.innerHTML = "Subscribed";
        }
        else{
            e.target.innerHTML = "Subscribe";
        }
    }
    modal=()=>{
        // console.log(document.getElementById('modal-id'));
        document.getElementById('modal-id').classList.toggle('hide-modal');
        document.getElementById('backdrop-id').classList.toggle('hide');
    }
    requestService=(e)=>{
        var value = e.target.innerHTML;
        e.target.classList.toggle("subscribed");
        if(value=="Request Service"){
            e.target.innerHTML = "Requesting Service";
        }
        else{
            e.target.innerHTML = "Request Service";
        } 
        setTimeout(() => {
            this.props.history.push("/customer/feedback");
        }, 2000);
    }
    render() {
        if (this.state.home == true) {
            servicesList = this.state.currentList.map((item) => {
                return (<div className="service-item" onClick={this.changeHandler} >{item}</div>);
            })
        } else if (this.state.Hospital == true) {
            servicesList = this.state.hospitalList.map((item) => {
                return (<Fragment><div className="list-item"><span onClick={this.modal}>{item}</span><button className="subscribe" onClick={this.subscribe} >Subscribe</button></div><hr /></Fragment>)
            })
        }
        else if (this.state.IT == true) {
            servicesList = this.state.ITList.map((item) => {
                return (<Fragment><div className="list-item">{item}</div><hr /></Fragment>)
            })
        }
        companyServices = this.state.hospitalServices.map((item)=>{
            return (<Fragment><div className="list-item"><span onClick={this.modal}>{item}</span><button className="subscribe" onClick={this.requestService} >Request Service</button></div><hr /></Fragment>);
        })
        return (
            <div>
                <nav className="company-home-nav">
                    <span className="company-name" >Customer Name</span>
                    <div className="profile-area">
                        <Link to="/company/auth">Logout</Link>
                    </div>
                </nav>
                <div className="company-home-container">
                    <div className="company-home-heading">
                        <span className="services" >Services Available</span>
                        <input onChange={this.updateList} type="text" className="theme-input margin-right" placeholder="Employee name" />
                    </div>
                    {this.state.home ? <div className="services-list flex" >
                        {servicesList}
                        <div className="more-services">{"More services are coming soon"}</div>
                    </div> : <Fragment>                     
                        <div className="back-icon-container">
                        <img src={back} className="back-icon" onClick={this.clearOption} />
                        </div>
                        <div className="services-list" >
                                    {servicesList}
                        </div></Fragment>}
                </div>
                <Modal>
                <div className="modal hide-modal" id="modal-id" > 
                <div className="modal-heading">Services Available</div>
                <div className="services-list">
                    {companyServices}
                </div>
                <div className="buttons-modal">
                    <button className="ok">Ok</button>
                    <button className="cancel" onClick={this.modal} >Cancel</button>
                </div>
            </div>
                </Modal>
                <div className="backdrop hide" id="backdrop-id" onClick={this.modal}></div>
            </div>
        )
    }
}

export default withRouter(Consumer);