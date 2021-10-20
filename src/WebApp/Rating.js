import React from 'react'
import MasterPage from './MasterPage'
import { Jojoejo } from './Comment'
import CommentTop from './CommentTop'

function Rating() {
    return (
        <MasterPage>
            <div style={{padding:"30px"}}>
            <CommentTop />
            <Jojoejo />
            </div>
        </MasterPage>
    )
}

export default Rating
