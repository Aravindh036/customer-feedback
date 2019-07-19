import React, { Component } from 'react';
import './FeedbackModal.css';

export default class FeedbackModal extends Component {
    render() {
        return (
            <div className="modal hide-modal" id="modal-id" >
                {this.props.children}
            </div>
        )
    }
}
