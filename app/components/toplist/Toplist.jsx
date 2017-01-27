import React from 'react';
import {Link} from 'react-router';
import 'whatwg-fetch';

import Result from './Result';

class Toplist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        var self = this;
        fetch('http://localhost:3000/toplist')
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            self.setState({
                results: json
            })
        })
    }

    render() {
        const children = this.state.results.map(
            (result, rank) =>
                <Result
                    result={result}
                    rank={rank + 1}
                />);

        return (<div className="ranklist">
            <Link to="/play">Play</Link>
            <h1>Ranklist</h1>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Date</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {children}
                </tbody>
            </table>
        </div>);
    }
}

export default Toplist