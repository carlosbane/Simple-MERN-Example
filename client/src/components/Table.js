import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Table extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('/api/links')
            .then(res => res.json())
            .then(result =>  {
                this.setState({
                    data: result
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <Router>
                <div>
                    <table className="table table-striped table-responsive my-2">
                        <thead>
                            <tr>
                                <th>S/No.</th>
                                <th>Full URL</th>
                                <th>Short URL</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>*</td>
                                <td><a href="https://example.com">https://example.com</a></td>
                                <td><a href="/123456">123456</a></td>
                                <td><button className="btn btn-danger" disabled>Delete</button></td>
                            </tr>
                            {this.state.data.map((link, index) => {
                                return(
                                        <tr key={index+2}>
                                            <td key={index+3}>{index+1}.</td>
                                            <td key={index+4}><a href={link.longlink}>{link.longlink}</a></td>
                                            <td key={index+5}><a href={link.longlink}>
                                                <Switch>
                                                    <Route path={link.shortlink} component={() => window.location = (link.longlink)} />
                                                </Switch>
                                                {link.shortlink}
                                            </a></td>
                                            <td key={index+6}><button className="btn btn-danger" onClick={() => {
                                                console.log(link._id);
                                                fetch(`api/links/${link._id}`, {
                                                    method: "DELETE",
                                                })
                                                .then( response => response.json())
                                                .then(data => {
                                                    const link = window.location;
                                                    window.location = link;
                                                });
                                            }}>Delete</button></td>
                                        </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Router>
        )
    }
}

export default Table;