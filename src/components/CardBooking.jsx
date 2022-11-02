import React from 'react'
import '../App.css'


const CardBooking = ({ bookinInfo }) => {
    console.log(bookinInfo)

    const cat = bookinInfo.category == null ? 4 : bookinInfo.category

    const categoryNum = ['Brunch', 'Almuerzo', 'Fiesta', 'General']
    const categoryIcon = ['baguette', 'bowl-hot', 'party', 'block']
    const categoryName = categoryNum[cat - 1]
    const categoryname = categoryName.toLowerCase()


    return (
        <div className={`card ${categoryname}`}>
            <div className="cardInfo">

                <section className='card_header'>
                    <i className={`bx bx-${categoryIcon[cat - 1]}`}></i>
                    <div className="userName">
                        <i class='bx bxs-user-check'></i>
                        <span className=''>{bookinInfo.user.name}</span>
                    </div>
                    <span>{bookinInfo.date}</span>

                </section>
                <div><b>Nombre: </b>{bookinInfo.completename}</div>
                <div><b>Categoria: </b>{categoryName}</div>
                <div className="kidad">
                    <div className='kidad_child'><i className='bx bx-male-female'></i>{bookinInfo.adults}</div>
                    <div className='kidad_child'><i className='bx bx-run'></i>{bookinInfo.kids}</div>
                </div>
                <div><i className='bx bx-money-withdraw'></i><b></b>{bookinInfo.pay}</div>
                <div><b>Observaciones: </b>  {bookinInfo.notes}</div>
            </div>
        </div>
    )
}

export default CardBooking