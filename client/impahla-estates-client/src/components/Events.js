import React, { useEffect, useState  } from 'react';
import EventsCards from './Card/EventsCards';


const Events = () => {

    const [listedEvent, setListedEvent] = useState([])

    useEffect(() => {
        fetch('/events')
        .then(r => r.json())
        .then((eventInfo) => {
            setListedEvent(eventInfo)
        })
    }, [])

    const showEvents = listedEvent.map((listEvent) => (
        <>
            <EventsCards events={listEvent} />
        </>
    ))    

    return (
        <div>
            <h1>Events</h1>
            {showEvents}
        </div>
    )
}

export default Events
