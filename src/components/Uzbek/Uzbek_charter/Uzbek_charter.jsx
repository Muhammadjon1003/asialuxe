import './Uzbek_charter.css'
import airways from '../../../assets/HY.avif'
import { flights } from '../../../data.js'; 

// import { useParams } from 'react-router-dom'

const Uzbek_charter = () => {
    
    // const { id } = useParams();
    const id = 1
    const ticket = flights.find(ticket => ticket.id === parseInt(id))

    //path_time
    const [departHours, departMinutes] = ticket.depart_time.split(":").map(Number);
    const [arriveHours, arriveMinutes] = ticket.arrive_time.split(":").map(Number);
    const totalHours = arriveHours - departHours;
    const totalMinutes = arriveMinutes - departMinutes;
    

    return (
        <div className="charter">
        <div className="charter_right">
            <div className="ticket_prices">
                <h4>Avia chiptasi narxi</h4>
                <div className='ticket_prices-box'>
                    <div className='ticket_prices-top'>
                        <i class="fa-regular fa-circle one"></i>
                        <i class="fa-regular fa-circle two"></i>
                        <hr className='price_line'/>
                    </div>
                    <div className='ticket_prices-bottom'>
                        <h5>{ticket.price} USD</h5>
                        <h5>{ticket.price + 1} USD</h5>
                    </div>
                </div>
            </div>
            <hr />
            <div className="charter_right-items">
                <h4>O'tkazmalar</h4>
                <div className='charter_checkbox'>
                    <input type="checkbox" />
                    <h5>Без пересадка</h5>
                </div>
            </div>
            <hr />
            <div className="charter_right-items">
                <h4>Havo yo'llari</h4>
                <div className='charter_checkbox'>
                    <input type="checkbox" />
                    <h5>Uzbekistan Airways</h5>
                </div>
            </div>
            <hr />
            <div className="charter_right-items">
                <h4>Options</h4>
                <div className='charter_checkbox'>
                    <input type="checkbox" />
                    <h5>Yuki bilan</h5>
                </div>
            </div>
            <hr />
            <div className="charter_right-items">
                <h4>Ketish vaqti</h4>
                <div className='charter_checkbox'>
                    <input type="checkbox" />
                    <h5>{ticket.depart_time}</h5>
                </div>
            </div>
            <hr />
            <div className="charter_right-items">
                <h4>Kerish vaqti</h4>
                <div className='charter_checkbox'>
                    <input type="checkbox" />
                    <h5>{ticket.arrive_time}</h5>
                </div>
            </div>
        </div>
        <div className="charter_left">
            <div className='charter_information'>
                <div className='charter_information-top'>
                    <img src={airways} alt="airways" className='airways_img'/>
                    <div className='ticket-inf'>
                        <div className='ticket-bagaj'>
                            <div className='align-ticket-bagaj'>
                                <i class="fa-solid fa-ticket"></i>
                                <h6>Y</h6>
                            </div>
                            <div className='align-ticket-bagaj'>
                                <i class="fa-solid fa-suitcase-rolling"></i>
                                <h6>30kg</h6>
                            </div>
                        </div>
                        <div className='irrevocable'>
                        <i class="fa-solid fa-circle-xmark"></i>
                        <h6>Не возвратный</h6>
                        </div>
                    </div>
                </div>
                <div className='charter_information-bottom'>
                    <div className='depart'>
                        <h5>{ticket.depart_place} - {ticket.depart_place_acr} / Terminal:1</h5>
                        <h2>{ticket.depart_time}</h2>
                        <h5>{ticket.depart_date}</h5>
                    </div>
                    <div className='path'>
                        <div className='path_inf'>
                            <div className='path_places'>
                                <h4 className='path_place'>{ticket.depart_place_acr}</h4>
                                <h4 className='path_place'>{ticket.arrive_place_acr}</h4>
                            </div>
                            <div className='path_road'>
                                <i class="fa-solid fa-circle one"></i>
                                <i class="fa-solid fa-circle two"></i>
                                <hr className='path_road-line'/>
                            </div>
                        </div>
                        <h5 className='path_time'>В пути: {totalHours} часов {totalMinutes} минут</h5>
                    </div>
                    <div className='arrive'>
                        <h5>{ticket.arrive_place} - {ticket.arrive_place_acr} / Terminal:2</h5>
                        <h2>{ticket.arrive_time}</h2>
                        <h5>{ticket.depart_date}</h5>
                    </div>
                </div>
            </div>
            <div className='charter_buy'>
                <h2 className='ticket_price'>{ticket.price} USD</h2>
                <button className='ticket_buy-btn'>Купить</button>
            </div>
        </div>
        </div>
    )
}

export default Uzbek_charter;