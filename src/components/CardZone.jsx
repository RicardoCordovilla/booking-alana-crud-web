import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardBooking from './CardBooking'

const CardZone = ({ zoneName, date }) => {

    const [zoneInfo, setZoneInfo] = useState()

    // const url = `http://localhost:9000/api/v1/bookings?zone=${zoneName}&date=${date}`
    const url = `https://booking-alana-crud-api-production.up.railway.app/api/v1/bookings?zone=${zoneName}&date=${date}`

    const getZoneInfo = () => {
        axios.get(url)
            .then(res => {
                // console.log(res.data)
                setZoneInfo(res.data)
            })
            .catch(err => console.log(err.response.data))
    }

    useEffect(() => {
        getZoneInfo()
    }, [date])


    return (
        <div className={`cardZone ${zoneName}`}>
            <h2 className=''>ZONA {zoneName.toUpperCase()}</h2>
            {
                zoneInfo
                    ?.sort((a, b) => a.category - b.category)
                    .map(booking => (
                        <CardBooking
                            key={booking.id}
                            bookinInfo={booking}
                        />
                    ))
            }

        </div>
    )
}

export default CardZone