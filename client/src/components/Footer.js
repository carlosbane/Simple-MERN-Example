import React from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const Footer = () => {
    return(
        <div className="footer d-flex justify-content-around align-items-center">
            <p>Made With <span className="text-primary heart">♥</span> By SPIFF</p>
        </div>
    )
}

export default Footer;