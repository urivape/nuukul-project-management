import React, { Component } from 'react';

export default class Preloader extends Component {
	render() {
		return (
            <div id="preloader">
                <div className="canvas">
                    <img src="assets/img/logo.png" alt="logo" className="loader-logo" />
                    <div className="spinner"></div>   
                </div>
            </div>
        );
	}
}