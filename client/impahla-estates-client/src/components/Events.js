import React, { useEffect, useContext, useState  } from 'react';
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router';


const Events = () => {

    const [listedEvent, setListedEvent] = useState([])

    const { user } = useContext(UserContext)
    const history = useNavigate()

    useEffect(() => {
        if (!user){
            return history('/')
        }
    }, [user, history])

    useEffect(() => {
        fetch('/events')
        .then(r => r.json())
        .then((eventInfo) => {
            setListedEvent(eventInfo)
        })
        .then(() => console.log(listedEvent))
    }, [])

    

    return (
        <div>
            
        </div>
    )
}

export default Events
