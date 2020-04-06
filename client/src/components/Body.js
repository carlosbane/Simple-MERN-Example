import React from 'react';

import Form from './Form';
import Table from './Table';

const Body = () => {
    return(
        <div className="container my-4 view">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <Form />
                </div>
           
                <div className="col-md-6">
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Body;