import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

export default class BasicAlert extends Component {
    constructor(props){
        super(props);
    }

	render() {
		return (
            <div className={"alert alert-" + this.props.type } role="alert">
                { ReactHtmlParser(this.props.message) }
            </div>
        );
	}
}