import React, { Component } from 'react';

class EmployeeLogin extends Component {
    state = {
        login: true,
        signup: false,
        left:true
    };

    login = ()=>{
        var elements = document.getElementsByClassName('lin');
        var text = document.getElementById('lin-wrong');
        text.innerHTML = '';
        var email = elements[0].value;
        var pass = elements[1].value;
        
    }
    signup = ()=>{
        document.getElementsByClassName('pass-match')[1].style.display = "none";
        document.getElementsByClassName('pass-match')[0].style.display = "none";
        var elements = document.getElementsByClassName('sig');
        var email = elements[0].value;
        var uname = elements[1].value;
        var pass = elements[2].value;
        
    }

    getLogin = () => {
        if (this.state.login !== true) {
            this.setState({
                login: true,
                signup: false
            });
            document.getElementById("form-line-id").classList.toggle("move-line-right");
        }
    }
    getSignup = () => {
        if (this.state.signup !== true) {
            this.setState({
                login: false,
                signup: true
            });
            document.getElementById("form-line-id").classList.toggle("move-line-right");
        }
    }
    render() {
        return (
            <div className="home-container" >
                <div className="home-image">
                    <div className="container">
                        <div className="form-container">
                            <div className="login-signup">
                                <div className="login" onClick={this.getLogin} >Login</div>
                                <div className="signup" onClick={this.getSignup} >Sign up</div>
                                <div id="form-line-id" className="under-line-form"></div>
                            </div>
                            <div className="success">
                                <span id="singup-success">Signup Successful Login to continue</span>
                            </div>
                            <div className="login-signup-form">
                                {this.state.login === true ?
                                    <div className="login-form">
                                        <div className="align-start">
                                            <label>Email</label>
                                            <input className = "lin" type="email" />
                                        </div>
                                        <div className="align-start">
                                            <label>Password</label>
                                            <input className = "lin" type="password" />
                                        </div>
                                        <span id="lin-wrong"></span>
                                        <button onClick = {this.login} className="form-button">Login</button>
                                    </div> : null}
                                {this.state.signup === true ?
                                    <div className="signup-form">
                                        <div className="password">
                                            <div className="align-start">
                                                <label>Email</label>
                                                <input className = "sig" type="email" />
                                            </div>
                                            <div className="align-start">
                                                <label>Nick Name</label>
                                                <input className = "sig" type="text" />
                                            </div>
                                        </div>
                                        <span className="pass-match">*user already exists</span>
                                        <div className="password">
                                            <div className="align-start">
                                                <label>Password</label>
                                                <input className = "sig" type="password" />
                                            </div>
                                            <div className="align-start">
                                                <label>Confirm Password</label>
                                                <input id = "comf-pass" type="password" />
                                            </div>
                                        </div>
                                        <div className="password">
                                            <div className="align-start">
                                                <label>Company Name</label>
                                                <input className = "sig" type="text" />
                                            </div>
                                        </div>
                                        <span className="pass-match">*passwords does not match</span>
                                        <button onClick={this.signup} className="form-button">Signup</button>
                                    </div> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeLogin;