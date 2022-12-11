import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventsCards = ({ event, events, setEvents, user }) => {
    console.log(events)
    const handleDelete = (eventID) => {
        fetch(`/events/${eventID}`, {
            method: 'DELETE',
        })
        .then(() => {
            const filterEvents = events.filter(eventP => eventP.id !== eventID);
            console.log(`filterEvents: ${JSON.stringify(filterEvents)}`)
            setEvents(filterEvents)
        })
    }
    const history = useNavigate();


    return (
        <div className='bg-white items-center rounded-2xl mx-2 my-3'>
            <div>
            <div>
                <img className='w-full object-cover rounded-t-lg' src={event.media} alt={event.text}/>
            </div>
            <div>
                <div className='text-black text-xl font-bold text-center '><h4>{event.text}</h4></div>
                <div className='flex'><p className='text-black font-thin text-lg mx-auto my-3'>{event.date}</p></div>
                <div className='flex'>
                {user.id === event.host_id ?(
                    <div className='mx-auto'>
                        <button className='py-2 rounded-2xl mb-2 mx-2 cursor-pointer' onClick={() => handleDelete(event.id)}><p>Remove</p></button>
                        <button className='py-2 rounded-2xl mb-2 mx-2 cursor-pointer' onClick={() => history(`/events/${event.id}/edit`)}><p>Edit</p></button>
                    </div>)
                    : ''}
                </div>
            </div>
        </div>
        </div>
    )
}

export default EventsCards
