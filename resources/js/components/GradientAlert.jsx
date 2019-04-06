import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

export default class GradientAlert extends Component {
    constructor(props){
        super(props);
    }

	render() {
        var gradientType = "";
        switch(this.props.type){
            case "danger":
                gradientType = "bg-grafient-05"
                break;
            case "success":
                gradientType = "bg-grafient-04"
                break;
            case "info":
                gradientType = "bg-grafient-03"
                break;
            case "warning":
                gradientType = "bg-grafient-01"
                break;
            case "dark":
                gradientType = "bg-gradient-02";
                break;
            default:
                gradientType = "bg-gradient-06";
                break;
        }
		return (
            <div className={"alert " + this.props.gradientType + " no-border" } role="alert">
                { ReactHtmlParser(this.props.message) }
            </div>
        );
	}
}