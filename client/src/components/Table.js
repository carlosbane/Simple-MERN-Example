import React from 'react';

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
            <div>
                <table className="table table-striped my-2">
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
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                        {this.state.data.map((link, index) => {
                            return(
                                <tr key={index+2}>
                                    <td key={index+3}>{index+1}.</td>
                                    <td key={index+4}><a href={link.longlink}>{link.longlink}</a></td>
                                    <td key={index+5}><a href={link.longlink}>{link.shortlink}</a></td>
                                    <td key={index+6}><button className="btn btn-danger" onClick={() => {
                                        console.log(link._id);
                                        fetch(`api/links/${link._id}`, {
                                            method: "DELETE",
                                        })
                                        .then( response => response.json())
                                        .then(data => console.log(data));
                                    }}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;