import React from 'react';
import './Footer2.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory, useRouteMatch } from "react-router-dom";

function Footer() {

    const history = useHistory();

    return (
        <div>
            <div className="Footer">
                <p>© Copyright 2021 © © Copyright 2021 © © Copyright 2021 ©</p>
                <a href="https://www.kapook.com/" className="cta-btm">Get to know us</a>
            </div>
            <div className="btn-multi">
                <button className="btn-multiB" type="primary" onClick={() => history.push({ pathname: "/Home" })}>
                    Back to Homepage
                </button>
            </div>
        </div>
    )
}

export default Footer
