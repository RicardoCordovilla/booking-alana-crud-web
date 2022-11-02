import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import formatDate from '../utils/formatDate'

const headers = {
  headers: {
    Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MDMzYWExLTdkYjktNDE0Ni1iZTc2LWJkNTNjMWYwODJjMCIsImVtYWlsIjoiYWxhbmFAYWxhbmEuY29tIiwiaWF0IjoxNjY3MzU1NjAyfQ.Jj0TQxcBwAO7eq19WEMqo_bNxS39ONniHQq8xutnywM'
  }

}

const currentDate=Date.now()
const today=new Date(currentDate)
const nowDate=formatDate(today, 'yy-mm-dd')
// console.log(nowDate)




const resetValues = {

  completename: '',

}

function BookingForm({closeForm,setDatefilter}) {

  const { register, handleSubmit, reset } = useForm()



  const submit = data => {
    // const urlBooking = `http://localhost:9000/api/v1/bookings`
    const urlBooking = `https://booking-alana-crud-api-production.up.railway.app/api/v1/bookings`
    axios.post(urlBooking, data, headers)
      .then(res => { 
        console.log(res.data) 
        reset()
      })
      .catch(err => console.log(err))

      closeForm()
      setDatefilter(data.date)
  }


  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit(submit)}>
        <span className='form__closeBtn'
          onClick={closeForm}
        ><i className='bx bx-x'></i></span>
        {/* <h2>{updateInfo ? "Update user" : "New user"}</h2> */}
        <h2>Crear resrva</h2>

        <div className="field">
          <label htmlFor="zone">Zona</label>
          <select {...register('zoneName')} id="zone" required={true} >
            <option value="circo">Circo</option>
            <option value="dino">Dino</option>
            <option value="mono">Mono</option>
            <option value="troncos">Troncos</option>
            <option value="tarabita">Tarabita</option>
            <option value="alana park">Alana park</option>
            <option value="otra" defaultChecked={true}>Otra</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="date">Fecha</label>
          <input {...register('date')} type="date" id='date' placeholder='Fecha de reserva' required defaultValue={nowDate}/>
        </div>

        <div className="field">
          <label htmlFor="name">Nombre completo del cliente</label>
          <input {...register('completename')} type="text" id='name' placeholder='Nombre del cliente' minLength={4} required defaultValue={''}/>
        </div>

        <div className="field">
          <label htmlFor="phone">Celular</label>
          <input {...register('phone')} type="text" id='phone' placeholder='Celular' minLength={9} required/>
        </div>

        <div className="field">
          <label htmlFor="adults">Adultos</label>
          <input {...register('adults')} type="number" id='adults' placeholder='Adultos' min={1} required defaultValue={1}/>
        </div>
        <div className="field">
          <label htmlFor="kids">Niños</label>
          <input {...register('kids')} type="number" id='kids' placeholder='Niños' required defaultValue={0}/>
        </div>

        <legend>Categoria</legend>
        <div className="optioncontainer">
          <label className="rad-label">
            <input type="radio" className="rad-input" {...register('category')} value={4} required={true} defaultChecked={true}></input>
            <div className="rad-design"></div>
            <div className="rad-text">GENERAL</div>
          </label>

          <label className="rad-label">
            <input type="radio" className="rad-input" {...register('category')} value={1} required={true}></input>
            <div className="rad-design"></div>
            <div className="rad-text">BRUNCH</div>
          </label>

          <label className="rad-label">
            <input type="radio" className="rad-input" {...register('category')} value={2} required={true}></input>
            <div className="rad-design"></div>
            <div className="rad-text">ALMUERZO</div>
          </label>

          <label className="rad-label">
            <input type="radio" className="rad-input" {...register('category')} value={3} required={true}></input>
            <div className="rad-design"></div>
            <div className="rad-text">FIESTA</div>
          </label>


        </div>

        <div className="field">
          <label htmlFor="pay">Anticipo</label>
          <input {...register('pay')} type="number" id='pay' placeholder='Anticipo $$' defaultValue={0}/>
        </div>

        <div className="field">
          <label htmlFor="motes">Observaciones</label>
          <input {...register('notes')} type="text" id='motes' placeholder='Observaciones adicionales' minLength={5} />
        </div>


        {/* <button>{updateInfo ? "Save changes" : "Add new user"}</button> */}
        <button>Crear reserva</button>





      </form>
    </div>
  )
}

export default BookingForm