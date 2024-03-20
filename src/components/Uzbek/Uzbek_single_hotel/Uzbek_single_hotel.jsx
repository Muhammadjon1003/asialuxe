// import React from 'react'
import { useState } from "react";
// import { flights} from "./flights/hotels";
import "./Uzbek_single_hotel.css"
export default function Uzbek_single_hotel() {

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
  return (
    <div className="bodys">
      <div className="container">
        <div className="Header">
          <div className="Header_block">
           <img className="rating" src="rating.png" alt="" />
            <div className="info">
             <h1 className="header-title">Titanic Luxury Collection Bodrum</h1>
             <a href="#"><img className="location" src="location.png" alt="" /><span className="location-span">Show on map</span></a>
             <br />
             <br />
             <a href="#"><button className="button">View prices</button></a>
           </div>
           
            <div className="images">
             <img className="images1" src="https://i.travelapi.com/lodging/15000000/14640000/14630500/14630412/d5e4979c_z.jpg" alt="" />
              <div className="img">
               <img className="images2" src="https://i.travelapi.com/lodging/15000000/14640000/14630500/14630412/6a31dc14_z.jpg" alt="" />
               <img className="images3" src="https://i.travelapi.com/lodging/15000000/14640000/14630500/14630412/c9c1ae93_z.jpg" alt="" />
              </div>
              
              <div className="img">
               <img className="images4" src="https://i.travelapi.com/lodging/15000000/14640000/14630500/14630412/9740e59b_z.jpg" alt="" />
               <img className="images5" src="https://i.travelapi.com/lodging/15000000/14640000/14630500/14630412/d4ff17c2_z.jpg" alt="" />
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
                  <ul className="menu">
                   <li>Elevator</li>
                   <li>Hair salon</li>
                   <li>Airport transportation (surcharge)</li>
                   <li>Laundry facilities</li>
                   <li>Garden</li>
                   <li>Free breakfast</li>
                   <li>Children pool</li>
                   <li>Free newspapers in lobby</li>
                   <li>Porter/bellhop</li>

                    <div className="secret" style={{ display: buttonClicked ? 'block' : 'none' }}>
                     <li>On private beach</li>
                     <li>Spa treatment room(s)</li>
                     <li>Sauna</li>
                     <li>Designated smoking areas</li>
                     <li>Billiards or pool table</li>
                     <li>Free WiFi</li>
                     <li>Area shuttle (surcharge)</li>
                     <li>Tennis on site</li>
                     <li>Number of indoor pools - 1</li>
                     <li>Snack bar/deli</li>
                     <li>Fitness classes on site</li>
                     <li>Playground on site</li>
                     <li>Tennis lessons on site</li>
                     <li>Free self parking</li>
                     <li>Number of bars/lounges - 11</li>
                     <li>Number of beach bars - 4</li>
                     <li>Daily</li>
                     <li>Free water park access</li>
                     <li>Beach umbrellas</li>
                     <li>Pool cabanas (surcharge)</li>
                     <li>Pool sun loungers</li>
                     <li>Beach volleyball on site</li>
                     <li>Free buffet breakfast</li>
                     <li>Childrens club (free)</li>
                     <li>Electric car charging station</li>
                     <li>Games</li>
                     <li>Concerts/live shows</li>
                     <li>Vegetable garden</li>
                     <li>LED light bulbs</li>
                     <li>Renewable energy source - solar</li>
                     <li>Covered parking</li>
                     <li>Secured parking</li>
                     <li>Uncovered parking</li>
                     <li>Outdoor entertainment area</li>
                     <li>Wheelchair accessible (may have limitations)</li>
                     <li>Visual alarms in hallways</li>
                     <li>Secured bicycle storage</li>
                     <li>Lifeguard on site</li>
                     <li>Change of bed sheets (on request)</li>
                     <li>Humane animal treatment</li>
                     <li>Showcase for local artists</li>

                     <br />

                     <li>Guest education on local ecosystems and culture</li>
                     <li>Locally-sourced food on site (80% or more)</li>
                     <li>At least 80% of all lighting comes from LEDs</li>
                     <li>Vegan menu options available</li>
                     <li>Comprehensive recycling policy</li>
                     <li>No single-use plastic stirrers</li>
                     <li>Reusable tableware only</li>
                     <li>Water-efficient toilets only</li>
                     <li>No accessible airport shuttle</li>
                     <li>Elevator door width (centimeters) - 90</li>
                    </div>
                  </ul>
                     
                  <ul>
                    <li>Fitness facilities</li>
                    <li>Concierge services</li>
                    <li>Coffee/tea in common areas</li>
                    <li>Arcade/game room</li>
                    <li>Library</li>
                    <li>Nightclub</li>
                    <li>Safe-deposit box at front desk</li>
                    <li>24-hour front desk</li>
                    <li>Dry cleaning/laundry service</li>
                     
                    <div className="secret" style={{ display: buttonClicked ? 'block' : 'none' }}>
                      <li>Full-service spa</li>
                      <li>Steam room</li>
                      <li>Outdoor seasonal pool</li>
                      <li>Pool umbrellas</li>
                      <li>Tours/ticket assistance</li>
                      <li>Braille or raised signage</li>
                      <li>Number of restaurants - 7</li>
                      <li>Waterslide</li>
                      <li>Outdoor tennis courts - 1</li>
                      <li>Turkish bath/Hammam</li>
                      <li>Bicycle rentals on site</li>
                      <li>Scuba diving on site</li>
                      <li>Yoga classes/instruction on site</li>
                      <li>Free valet parking</li>
                      <li>Number of poolside bars - 1</li>
                      <li>Number of coffee shops/cafes - 3</li>
                      <li>Luggage storage</li>
                      <li>Free beach shuttle</li>
                      <li>Beach cabanas (surcharge)</li>
                      <li>Beach sun loungers</li>
                      <li>Beach towels</li>
                      <li>Terrace</li>
                      <li>Babysitting or childcare (surcharge)</li>
                      <li>Supervised childcare/activities (surcharge)</li>
                      <li>Books</li>
                      <li>Table tennis</li>
                      <li>Evening entertainment</li>
                      <li>Eco-friendly cleaning products provided</li>
                      <li>RecyclingEco-friendly cleaning products used</li>
                      <li>Uncovered parking</li>
                      <li>Covered parking</li>
                      <li>Secured parking</li>
                      <li>Swimming nearby</li>
                      <li>Free beach club on site</li>
                      <li>Wheelchairs available on site</li>
                      <li>Bicycle parking available</li>
                      <li>Change of towels (on request)</li>
                      <li>Vegetarian breakfast available</li>
                      <li>Locally-owned & organized tours & activities</li>
                      <li>Sustainability/community reinvestment (10% revenue or <br />more)</li>
                      <li>Double-glazing on all windows</li>
                      <li>Energy-saving switches</li>
                      <li>Comprehensive food waste policy</li>
                      <li>Vegetarian menu options available</li>
                      <li>No single-use plastic soda bottles</li>
                      <li>Biodegradable/compostable stirrers</li>
                      <li>Water-efficient showers only</li>
                      <li>No accessible shuttle</li>
                      <li></li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="informatn">
                <h1 className="names">Information</h1>
                <ul>
                  <li>Pets not allowed</li>
                  <li>Service animals not allowed</li>
                  <li>Car recommended</li>
                  <li>Essential workers only - NO</li>
                  <li>Property is cleaned with disinfectant</li>
                  <li>Property follows regional sanitization guidelines Safe Tourism <br />Certification Program (Turkey)</li>
                  <li>Property confirms they are implementing enhanced cleaning measures</li>
                  <li>Bed sheets and towels are washed at a temperature of at least <br /> 60°C/140°F</li>

                  <div className="secret"style={{ display: buttonClicked ? 'block' : 'none' }}>
                    <li>Commonly-touched surfaces are cleaned with disinfectant</li>
                    <li>Property follows sanitization practices of COVID-19 Guidelines <br />(WHO)</li>
                  </div>
                </ul>
              </div>
              
            </div>
            <button className="add" onClick={handleButtonClick}>Show more</button>
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

