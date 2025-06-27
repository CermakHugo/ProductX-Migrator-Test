

import React, { Component } from 'react';
import axios from 'axios';

class OperatorsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operators: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/operators')
            .then(response => {
                this.setState({ operators: response.data });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <h2>Operators</h2>
                <ul>
                    {this.state.operators.map((operator, index) => (
                        <li key={index}>{operator.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default OperatorsComponent;