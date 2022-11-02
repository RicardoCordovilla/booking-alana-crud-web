import { useEffect, useState } from 'react'
import './App.css'
import BookingForm from './components/BookingForm'
import CardZone from './components/CardZone'
import formatDate from './utils/formatDate'

const currentDate = Date.now()
const today = new Date(currentDate)
const nowDate = formatDate(today, 'yy-mm-dd')
console.log(nowDate)

function App() {

  const [formOpen, setFormOpen] = useState(false)

  const [datefilter, setDatefilter] = useState(nowDate)

  const openForm = () => setFormOpen(true)
  const openNewForm = () => {
    // setUpdateInfo()
    setFormOpen(true)
  }
  const closeForm = () => setFormOpen(false)

  useEffect(() => {
    console.log(datefilter)
  }, [datefilter])






  return (
    <div className="App">
      <header className='homeHeader'>
        <figure className="logoBx">
          <img src="./logoalana.jfif" alt="" className='logoImg'/>
        </figure>
        <div className="">
          {/* <label htmlFor="date">Fecha</label> */}
          <input name='filterdate' type="date" id='date' defaultValue={nowDate}
            onChange={e => { setDatefilter(e.target.value) }}
          />
        </div>

        <button className='btnNewBooking' onClick={openNewForm}>
          <i className='bx bx-plus'></i>
          NUEVA
        </button>
      </header>

      <div
        className={formOpen ? 'formContainer' : 'formHide'}
      >
        <BookingForm
          // createUser={createUser}
          // updateInfo={updateInfo}
          closeForm={closeForm}
          setDatefilter={setDatefilter}
        />
      </div>

      <div className="cardsZoneContainer">
        <CardZone zoneName={'circo'} date={datefilter} />
        <CardZone zoneName={'dino'} date={datefilter} />
        <CardZone zoneName={'mono'} date={datefilter} />
        <CardZone zoneName={'troncos'} date={datefilter} />
        <CardZone zoneName={'tarabita'} date={datefilter} />
        <CardZone zoneName={'alana park'} date={datefilter} />
        <CardZone zoneName={'otra'} date={datefilter} />

      </div>


    </div>
  )
}

export default App
