import React from 'react';
import '../Css/CommentCards.css'

const CommentCard = ({ comment }) => {



    return (
        <div key={comment.id}>
            <div className='comment-text'>
                <p>{comment.text}</p>
            </div>
            <div className='comment-line'></div>
        </div>
    )
}

export default CommentCard
