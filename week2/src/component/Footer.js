import React from "react";
import "../totalcss/Footer.css"
export default class Footer extends React.Component {
    render(){
        return (
            <div className="Footer">
                <p>Double-click to edit a Todo</p>
                <p>Created by the TodoMVC team</p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a>
                </p>
            </div>
        )
    }
}