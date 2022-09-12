import React, { useEffect, useState } from 'react'
import ListingsCard from './Card/ListingsCard'

const Listings = () => {

    const [property, setProperty] = useState([])

    useEffect(() => {
        fetch('/listings')
        .then(r => r.json())
        .then(propData => setProperty(propData))
    })

    const listedProperties = property.map((listedP) => (
        <>
            <ListingsCard listings={listedP} />
        </>
    ))

    return (
        <div>
            {listedProperties}
        </div>
    )
}

export default Listings
