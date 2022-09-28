import React from 'react';
import './Css/Home.css'
import Banner from './Banner';
import HomeCards from './Card/HomeCards';
import { HomeActionCard } from './HomeActionCard'

const Home = () => {

    return (
        <div>
           <Banner /> 
           <h1 className='Title'>Home</h1>
           <div className='Home-Card-Container' style={{ border:'flex', flexWrap:'wrap' }}>
               {HomeActionCard.map((card) => {
                    return (<HomeCards 
                    title={card.title}
                    imageUrl={card.imageUrl}
                    body={card.body}
                    path={card.path}
                    />)
                })}
           </div>
           
        </div>
    )
}

export default Home
