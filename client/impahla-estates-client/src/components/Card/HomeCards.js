import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/HomeCards.css';

const HomeCards = ({ title, imageUrl, body, path }) => {

    const history = useNavigate()

    return (
        <div className='card-container' >
            <div className='image-container'>
                <img src={imageUrl} alt={title}/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div className='btn' style={{ justifyItems:'center' }}>
                    <button onClick={() => history(path)}>
                        <a>
                            View More
                        </a>
                    </button>
                </div>
            </div>
                
        </div>
    )
}

export default HomeCards
