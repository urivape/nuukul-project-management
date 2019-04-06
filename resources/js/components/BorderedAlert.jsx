import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

export default class BorderedAlert extends Component {
    constructor(props){
        super(props);
    }

	render() {
		return (
            <div className={"alert alert-" + this.props.type + "-bordered alert-lg square" } role="alert">
                { ReactHtmlParser(this.props.message) }
            </div>
        );
	}
}