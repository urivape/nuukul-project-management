import React, { Component } from 'react';
import Alert from './OutlineAlert.jsx';

export default class _LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'urivape@outlook.com',
            password: 'IkerPedro09161',
            showError: false,
            errorMessage: '',
            disableLoginButton: false,
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
        this.setState({ disableLoginButton: true });
        event.preventDefault();
        $.ajax({
            url: formAction,
            type: 'POST',
            data: {
                'email': this.state.email,
                'password': this.state.password,
                '_token': csrf_token
            },
            cache: false,
            success: function (response){
                response = $.parseJSON(response);
                console.log(response);
                console.log(response.authenticated);
                if (response.authenticated) {
                    window.location.href = "/";
                }
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({ disableLoginButton: false });
                var errors = xhr.responseJSON.errors;
                if (errors) {
                    if (errors.email.length > 0) {
                        this.setState({ showError: true, errorMessage: errors.email[0] });    
                    }
                } else {
                    this.setState({ showError: true, errorMessage: xhr.responseJSON.message });
                } 
            }.bind(this)
        });
    }

    render() {
        return (
            <>
                {/* Begin Form */}
                <div className="authentication-form mx-auto">
                    <div className="logo-centered">
                        <a href="db-default.html">
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

                        <div className="row">
                            <div className="col text-left">
                                <div className="styled-checkbox">
                                    <input type="checkbox" name="checkbox" id="remeber" defaultChecked={formRememberMe} />
                                    <label htmlFor="remeber">Remember me</label>
                                </div>
                            </div>
                            <div className="col text-right">
                                <a href={routeForgotPassword}>Forgot Password ?</a>
                            </div>
                        </div>
                        <div className="sign-btn text-center">
                            <button type="submit" className="btn btn-lg btn-gradient-04" disabled={ this.state.disableLoginButton }>Sign in</button>
                        </div>
                    </form>
                    { this.state.showError ? 
                        (<><p>&nbsp;</p><Alert type='danger' message={ this.state.errorMessage } /></>) : null 
                    }
                </div>
                {/* End Form */}
            </>
        );
    }
}