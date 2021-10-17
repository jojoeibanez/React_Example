import React from 'react'
import './Success.css'
import { useHistory } from "react-router";


function Success() {
    const history = useHistory();

    return (
        <div>
            <div className="login-div">
                <div className="login-suc">
                    Login Success
                </div>
                <div className="btn-account">
                    <button className="btn-acc" onClick={() => history.push({ pathname: "/Account" })} >
                        Accout
                    </button>
                </div>
                <div className="btn-logout">
                    <button className="btn-log" onClick={() => history.push({ pathname: "/Login" })}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Success
