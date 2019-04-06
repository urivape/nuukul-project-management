import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

export default class OutlineAlert extends Component {
    constructor(props){
        super(props);
    }

	render() {
		return (
            <div className={"alert alert-outline-" + this.props.type } role="alert">
                { ReactHtmlParser(this.props.message) }
            </div>
        );
	}
}