import React from 'react';
import Banner from './Banner';
import HomeCards from './Card/HomeCards';
import { HomeActionCard } from './HomeActionCard'

const Home = () => {

    return (
        <div className='bg-zinc-50'>
            <Banner />
            <div className='flex py-4'>
                <p className='flex justify-between items-center mx-auto font-bold text-4xl'>Your Trip To Financial Freedom Starts Here!</p>
            </div>
           
           <div className='Line'></div>
           <div className='Card-Container'>
               <div className='items-center grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
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
           <div className='bg-white my-2 pt-1'>
               <div className=' flex bg-white my-4 mx-auto items-center'>
               <h3 className='items-center mx-auto flex justify-between'>You have a right to fair housing.</h3>
               
                </div>
                <div className=' flex bg-white my-4 mx-auto items-center'>
                    <a className='text-blue-700 items-center mx-auto flex justify-between cursor-pointer' href='https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf'>Learn about New York Fair Housing protections</a>
                </div>
           </div>
           
        </div>
    )
}

export default Home
