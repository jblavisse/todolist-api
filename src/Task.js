import React, { Component } from 'react'
import './Task.css';

export default class Task extends Component {
    render() {
        return (
            <div className="task">
                <h2>{this.props.data.title}</h2>
                <button>{this.props.data.id}</button>
            </div>
        )
    }
}
