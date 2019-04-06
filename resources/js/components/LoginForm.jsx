import React, { Component } from 'react';
import Alert from './OutlineAlert.jsx';
import axios from 'axios';
import Noty from 'noty';

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            remember: formRememberMe,
            errorMessage: '',
            disableLoginButton: false,
            signInText: "Sign in",
            validatingText: "Validating"
        };

        this.onChange = this.onChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    _handleSubmit(event){
        this.setState({ errorMessage: '', disableLoginButton: true });
        event.preventDefault();
        axios.post(formAction,{
            email: this.state.email,
            password: this.state.password,
            _token: csrf_token
        }).then(response => {
            if (response.data.authenticated) {
                window.location.href = "/";
            }
        }).catch((xhr) => {
            this.setState({ disableLoginButton: false });
            var errors = xhr.response.data.errors;
            if (errors) {
                var strMessage = "";
                if (errors.email && errors.email.length > 0) {
                    strMessage += "<li>" + errors.email[0] + "</li>";
                }
                if (errors.password && errors.password.length > 0) {
                    strMessage += "<li>" + errors.password[0] + "</li>";
                }
                this.setState({ errorMessage: "<ul><h4 class='text-white'><b><i class='ion-close-circled'></i> Error</b></h4>" + strMessage + "</ul>" });

            } else {
                this.setState({ errorMessage: xhr.responseJSON.message });
            }
            new Noty({
                layout: "bottomRight",
                type: "error",
                text: this.state.errorMessage,
                progressBar: true,
                timeout: 3000
            }).show();
        });
    }

    render() {
        return (
            <>
                {/* Begin Form */}
                <div className="authentication-form mx-auto">
                    <div className="logo-centered">
                        <a href="/">
                            <img src={"assets/img/logo.png"} alt="logo" />
                        </a>
                    </div>
                    <h3>Sign In To Nuukul</h3>
                    <form onSubmit={this._handleSubmit}>
                        <input type="hidden" name="_token" value={csrf_token} />
                        <div className="group material-input">
                            <input name="email" type="text" required value={ this.state.email } onChange={this.onChange} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>
                        <div className="group material-input">
                            <input name="password" type="password" required value={ this.state.password } onChange={this.onChange} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Password</label>
                        </div>
                        <div className="sign-btn text-center">
                            <button type="submit" className="btn btn-lg btn-gradient-04" disabled={ this.state.disableLoginButton }>
                                { this.state.disableLoginButton ? this.state.validatingText : this.state.signInText }
                            </button>
                        </div>
                    </form>
                </div>
                {/* End Form */}
            </>
        );
    }
}