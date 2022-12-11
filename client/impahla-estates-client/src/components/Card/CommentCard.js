import React from 'react';

const CommentCard = ({ comment }) => {



    return (
        <div key={comment.id}>
            <div>
                <p className='text-sm'>{comment.text}</p>
            </div>
            <div className='bg-gray-100 pt-0.5 rounded-xl'></div>
        </div>
    )
}

export default CommentCard
