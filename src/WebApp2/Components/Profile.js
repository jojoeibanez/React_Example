import React, { useState } from 'react';
import Mainpage from '../Mainpage';
import './Profile.css'
import Capture from '../Capture.JPG'


function Profile() {
    return (
        <Mainpage>
            <div>
                <img src={Capture} alt=""/>
                <p>ppppp</p>
            </div>
        </Mainpage>
    )
}

export default Profile

