import React, { Component } from 'react';
import {withRouter}  from 'react-router-dom'
import './Feedback.css';
import FeedbackModal from './FeedbackModal';
var positiveClass=["list-item"];
class Feedback extends Component {
    state = {
        critical: false,
        positive: false,
        negative: false,
        positiveClass:["list-item"]
    }
    modal = () => {
        // console.log(document.getElementById('modal-id'));
        document.getElementById('modal-id').classList.toggle('hide-modal');
        document.getElementById('backdrop-id').classList.toggle('hide');
    }
    changeCat = (e) => {
        var type = e.target.innerHTML;
        console.log("hello");

        if (type == "Positive") {
            // this.setState({
            //     positive: true,
            //     critical: false,
            //     negative: false
            // })
            var positiveClass = this.state.positiveClass;
            positiveClass.push("list-item-selected")
            this.setState({
                positiveClass:positiveClass
            });
            e.target.classList.toggle("list-item-selected");
            console.log("hello");
        }
        else if (type == "Negative") {
            this.setState({
                positive: false,
                critical: false,
                negative: true
            })
        }
        else if (type == "Critical") {
            this.setState({
                positive: false,
                critical: true,
                negative: false
            })
        }
    }
    submit=()=>{
        this.props.history.push("/customer/Aravindh036");
    }
    render() {
        
        return (
            <div className="home-container-1">
                <div className="connected flex-container">
                    You are connected with MedWay Hospital! 😊
            </div>
                <div className="employee-name flex-container">
                    Dr.Aswin
            </div>
                <div className="flex-container">
                    No Critical Feedbacks till now!😁😁😁
            </div>
                <div className="buttons flex-container space-around">
                    <button onClick={this.modal}>
                        Raise Feedback
            </button>
                    <button onClick={this.modal}>
                        End Connection
            </button>
                </div>
                <FeedbackModal>
                    <div className="feedback-form">
                        Feedback Form
                </div>
                    <div className="category flex-container">
                        <div onClick={this.changeCat} className={this.state.positiveClass}>
                            Positive 😁
                    </div>
                        <div onclick={this.changeCat} className="list-item">
                            Negative 🙁
                    </div>
                        <div onclick={this.changeCat} className="list-item">
                            Critical 😤
                    </div>
                    </div>
                    <div className="feedback-input">
                        <input className="theme-input" type="text" placeholder="feedback (optional)" />
                    </div>
                    <div className="m-buttons flex-container space-around">
                        <button onClick={this.submit} >Submit</button>
                        <button onClick={this.modal} className="red-c">Cancel</button>
                    </div>
                </FeedbackModal>
                <div className="backdrop hide" id="backdrop-id" onClick={this.modal}></div>
            </div>
        )
    }
}

export default withRouter(Feedback);