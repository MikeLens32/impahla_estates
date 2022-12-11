import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../Css/HomeCards.css';

const HomeCards = ({ title, imageUrl, body, path }) => {

    const history = useNavigate()

    return (
        <div className='bg-white items-center rounded-2xl w-9/12 mx-auto mb-4' >
            <div>
                <img className='mx-auto rounded-lg' src={imageUrl} alt={title}/>
            </div>
            <div className='my-2'>
                <div className='w-full flex items-center mx-auto'>
                    <h3  className='pl-2 font-bold text-2xl'>{title}</h3>
                </div>
                <div className='my-2'>
                    <p className='w-9/12 pl-2'>{body}</p>
                </div>
                <div>
                    <button className='py-2 rounded-2xl mb-2 mx-2 cursor-pointer' onClick={() => history(path)}>
                            <p>
                                View More
                            </p>
                        </button>
                </div>
            </div>
                
        </div>
    )
}

export default HomeCards
