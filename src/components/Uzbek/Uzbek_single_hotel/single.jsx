// import React from 'react'
import { useState } from "react";
import "./Uzbek_single_hotel.css"
import { useParams } from "react-router";
import { hotels } from "../../../Context/data";

export default function Single() {
  const [saflık, setSaflık] = useState(92);
  const[location, setLocation]=useState(100);
  const[power, setPower]=useState(90);
  const [buttonClicked, setButtonClicked] = useState(false);
  

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleChange = (event) => {
    setSaflık(event.target.value);
  };
  const handleChanges = (event) => {
    setLocation(event.target.value);
  };
  const handleChangs = (event) => {
    setPower(event.target.value);
  };
  const { id } = useParams()
  let hotel = hotels.find(hotel => hotel.id == id)
  const { title, main_image, other_images, hotel_amenities, information} = hotel
 let shortHotelAMenities1 = hotel_amenities.slice(0,10)
 let shortHotelAMenities2 = hotel_amenities.slice(10,20)
 let longHotelAMenities1 = hotel_amenities.slice(0,44)
 let longHotelAMenities2 = hotel_amenities.slice(44,89)
  return (
    <div className="bodys">
      <div className="container">
        
        <div className="Header">
          <div className="Header_block">
              <img className="rating" src="rating.png" alt="" />
            <div className="info">
             <h1 className="header-title">{title}</h1>
             <a href="#"><img className="location" src="location.png" alt="" /><span className="location-span">Show on map</span></a>
             <br />
             <br />
             <a href="#"><button className="button">View prices</button></a>
           </div>
           
            <div className="images">
             <img className="images1" src={main_image} alt="" />
              <div className="img1">
               <img className="images2" src={other_images[0]} alt="" />
               <img className="images3" src={other_images[1]} alt="" />
              </div>
              
              <div className="img2">
               <img className="images4" src={other_images[2]} alt="" />
               <img className="images5" src={other_images[3]} alt="" />
              </div>

              <div className="statistic">
                <h2 className="statistic-title">Very good</h2>
                <hr />
                <h3 className="statistic-name">Guests celebrate:</h3>

                <span className="name">Saflık</span>
                <div className="saflik">
                 <input
                 type="range"
                 min={0}
                 max={100}
                 value={saflık}
                 onChange={handleChange}
                 className="slider"/>
                 <p>{saflık}.0 %</p>
                </div>

                <span className="name">Location</span>
                <div className="Location">
                  <input
                   type="range"
                   min={0}
                   max={100}
                   value={location}
                   onChange={handleChanges}
                   className="slider"/>
                   <p>{location}.0 %</p>
                </div> 
   
                <span className="name">Power</span>
                <div className="Power">
                  <input
                   type="range"
                   min={0}
                   max={100}
                   value={power}
                   onChange={handleChangs}
                   className="slider"/>
                  <p>{power}.0 %</p>
                </div> 
              </div>
            </div>

            <div className="hotel_and_informatsion">
              <div className=" hotel_amenities">
                <h1 className="names">Main hotel amenities</h1>
                <div className="uls">
                  
                 
                  {buttonClicked ? (
  <div className="menu">
    <ul>
      {longHotelAMenities1.map((amenity, index) => (
        <li key={index}>{amenity}</li>
      ))}
    </ul>
    <ul>
      {longHotelAMenities2.map((amenity, index) => (
        <li key={index}>{amenity}</li>
      ))}
    </ul>
  </div>
) : (
  <div className="menu">
    <ul>
      {shortHotelAMenities1.map((amenity, index) => (
        <li key={index}>{amenity}</li>
      ))}
    </ul>
    <ul>
      {shortHotelAMenities2.map((amenity, index) => (
        <li key={index}>{amenity}</li>
      ))}
    </ul>
  </div>
)}


                </div>
              </div>

              <div className="informatn">
                <h1 className="names">Information</h1>
                <ul>
                  {information.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              
            </div>
            <div className="add_container">
            <button className="add" onClick={handleButtonClick}>{buttonClicked ? 'Show less' : 'Show more'}</button>
            </div>
          </div>
        </div>
         
         <div>
          <div className="Error">
            <h1 className="names">Available numbers</h1>
             <div className="pink"><img className="errors" src="error.png" alt="" /><p>No numbers available</p></div>
          </div>
         </div>
        <div className="referens">
          <div className="referens_block">
            <h1 className="names">Politics</h1>
            <span className="span1">Checkin at: 2:00 PM</span>
            <br />
            <span className="span1">Checkout at: 12:00 PM</span>
            <div className="display_block">
              <span>Checkin instruction:</span>
              <p className="text">Extra-person charges may apply and vary depending on property policy <br />
               Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges <br />
               Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed <br />
               This property accepts credit cards, debit cards, and cash <br />
               This property uses solar energy, plus eco-friendly cleaning products <br />
               Safety features at this property include a smoke detector <br />             
              </p>
            </div>
            <hr />

            <div className="display">
              <span>Checkin special <br /> instruction:</span>
              <p>This property offers transfers from the airport (surcharges may apply). Guests must contact the property with arrival details before travel, using the contact information on the booking <br />confirmation. Front desk staff will greet guests on arrival.</p>
            </div>
            <hr />
            
            <div>
              <span className="display">Fees and Taxes <br />Mandatory:</span>
            </div>
            <hr />

            <div>
              <p className="display">Policies <br />
                The seasonal pool will be open from May to October. <br />
                Reservations are required for spa treatments. Reservations can be made by contacting the property prior to arrival, using the contact information on the booking confirmation. <br />
                The property has connecting/adjoining rooms, which are subject to availability and can be requested by contacting the property using the number on the booking confirmation. <br />
                No pets and no service animals are allowed at this property. <br />
                A car is recommended for transportation to and from this property.           
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

