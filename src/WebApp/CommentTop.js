import React from 'react'
import { Comment, Avatar } from 'antd';




function CommentTop() {
    const ExampleComment = ({ children }) => (
        <Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure).
                </p>
            }
        >
            {children}
        </Comment>
    );

    return (
        <div>
            <ExampleComment>
                <ExampleComment>
                    <ExampleComment />
                    <ExampleComment />
                </ExampleComment>
            </ExampleComment>,
        </div>
    )
}

export default CommentTop