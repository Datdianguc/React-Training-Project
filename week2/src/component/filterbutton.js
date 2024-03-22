import React from "react";
import "../totalcss/filterbutton.css"

export default class FilterButton extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return <button onClick={this.props.onClick}>{this.props.name}</button>
    }
} 