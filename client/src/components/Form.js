import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputLink: ''
        };

    }


    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                fetch('/api/links', {
                        method: "POST",
                        body: JSON.stringify({ longlink: this.state.inputLink }),
                        headers: {
                            'Content-type': "application/json"
                        }
                    })
                    .then( response => response.json())
                    .then(data => {
                        const link = window.location;
                        window.location = link;
                    });
                }} className="form card p-4 bg-dark">
                <input className="form-control input" onChange={(e) => {
                    this.setState({
                        inputLink: e.target.value
                    })
                }} placeholder="Enter Url..." />
                <input type="submit" className="form-control btn btn-primary my-2" value="Get short Link" />
            </form>
        )
    }
}

export default Form;