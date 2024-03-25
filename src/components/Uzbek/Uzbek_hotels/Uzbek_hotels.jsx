import React from 'react'
import './Uzbek_hotels.css'
import { hotels } from '../../../Context/data'
const Uzbek_hotels = () => {
  return (
    <div className='divKing'>
      <div className='List'><h1 className='texth1'>Exclusive Hotels <span> Asialuxe</span></h1></div>
      <div className='main_div'>

        {hotels.map((item) => (
          <div className="card">
                <div className="card_img">
                  <img className='imagess' src={item.main_image} alt="photos" />
                </div>
                <div className="card_text">
                  <h4 className='title'>{item.title}</h4>
                  <p>{item.country}</p>
                </div>
              </div>
            ))}
            </div>

    </div>
  )
}

export default Uzbek_hotels

