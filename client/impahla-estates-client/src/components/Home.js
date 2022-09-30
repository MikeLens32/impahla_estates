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
           <p className='Text'>Your Trip To Financial Freedom Starts Here!</p>
           <div className='Line'></div>
           <div className='Card-Container'>
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
           <div className='Footer'>
               <h3>You have a right to fair housing.</h3>
           </div>
           <div className='Tag'>
               <a href='https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf'>Learn about New York Fair Housing protections</a>
           </div>
           
        </div>
    )
}

export default Home
