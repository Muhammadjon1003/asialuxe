import React, { useState } from 'react';
import reactLogo from '../../../assets/left.png';
import airlogo from '../../../assets/air.png';
import odamlogo from '../../../assets/odam.png';

const Reservation = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    // Perform form submission logic here
  };

  return (
    <div className="content">
      <div className="detal">
        <a href=""><img src={reactLogo} className='left' alt="" /></a>
        <p className='deta'>Details</p>
      </div>
      <p className='pata'> Эгейский рай (Олюдениз - Салда - Паммуккале - Патара)</p>
      <p className='line'>________________________________________________</p>
      <div className="pas">
        <p className='tt'>TAS</p>
        <p className='tt'>12.04.2024</p>
        <img src={airlogo} className='airlogo' alt="" />
        <div className="pas2">
          <p>DLM</p>
          <p>07.06.2024</p>
        </div>
        <p className='line2'>____________________________________________________</p>
      </div>
      <div className="pas3">
        <p>DLM</p>
        <p>07.06.2024</p> <img src={airlogo} className='airlogo2' alt="" />
        <div className="pas5">
          <p>TAS</p>
          <p>14.06.2024</p>
        </div>
        <p className='line3'>_________________________________________________</p>
        <div className="odaml">
          <img src={odamlogo} className='odam' alt="" />
          <p className='bir'>1</p>
          <p className='clas'>Class:Эконом</p>
        </div>
        <p className='price'>Package price:</p>
        <p className='usd'>1200USD</p>
      </div>

      <div className="buyer">
        <div className="text">
          <h4 className='bb'>Buyer details</h4>
          <br  />
          <p className='flname'>Full name *</p>
          <input placeholder='Full name' className='full' type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          {isFormSubmitted && !fullName && <p className='error'>enter your full name !</p>}
        </div>
        <div className="text2">
          <p className='flname'>Email *</p>
          <input placeholder='Email' className='full' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          {isFormSubmitted && !email && <p className='error'>enter your email !</p>}
        </div>
        <div className="text3">
          <p className='flname'>Phone number *</p>
          <input placeholder='+998' className='full' type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          {isFormSubmitted && !phoneNumber && <p className='error'>enter your phone number!</p>}
        </div>
      </div>
      <div className="data">
        <div className="datatex">
          <h4 className='bb'>Passenger data</h4>
          <br />
          <h4 className='bb'>1 - Adult</h4>
          <br />
          <div className="text4">
            <p className='flname'>Last name *</p>
            <input placeholder='Last name' className='full' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            {isFormSubmitted && !lastName && <p className='error'>enter passenger last name !</p>}
          </div>
          <div className="text5">
            <p className='flname'>Name *</p>
            <input placeholder='Name' className='full' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            {isFormSubmitted && !name && <p className='error'>enter passenger name</p>}
          </div>
          <div className="text6">
            <p className='flname'>Birthday</p>
            <input className='full' type="datetime-local" value={name} onChange={(e) => setName(e.target.value)} required />
            {isFormSubmitted && !name && <p className='error'>enter passenger data</p>}
          </div>
          <div className="text7">
            <p className='flname'>Gender</p>
            <form>
              <select placeholder="Gender" className='full' id="country" name="country">
                <option value="au">Male</option>
                <option value="ca">Female</option>
              </select>
            </form>
          </div>
          <div className="text8">
            <p className='flname'>Citizenship</p>
            <form>
              <select placeholder="Gender" className='full' id="country" name="country">
                <option value="au">UZB-Uzbekistan</option>
                <option value="ca">ABW-Aruba</option>
                <option value="ca">AFG-Afghanistan</option>
                <option value="ca">AIA-Anguilla</option>
                <option value="ca">RUS-Russian Federation</option>
                <option value="ca">ARG-Argentina</option>
              </select>
            </form>
          </div>
          <div className="text9">
            <p className='flname'>Series and passport number *</p>
            <input className='full' placeholder='SERIES AND PASSPORT NUMBER' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            {isFormSubmitted && !name && <p className='error'>enter Series and passport number</p>}
          </div>
          <div className="text10">
            <p className='flname'>Expiration date</p>
            <input className='full' type="datetime-local"  value={name} onChange={(e) => setName(e.target.value)} required />
            {isFormSubmitted && !name && <p className='error'>enter Expiration date</p>}
          </div>
         
        </div>
      </div>
      
      <div className="comment">
        <div className="text11">
          <p className='ame'>Comment</p>
          <textarea placeholder='comment' className='com' name="" id="" cols="120" rows="6"></textarea>  
        </div>
      </div>
      <div className="payment">
        <div className="tex1">
          <p className='men'>Payment</p>
          <br />
          <form className='form1' onSubmit={handleFormSubmit}>
            <input className='check' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" required />
            <label className='acc' htmlFor="vehicle1">I accept the terms and conditions</label>
            <button type='submit' className='book'>Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
