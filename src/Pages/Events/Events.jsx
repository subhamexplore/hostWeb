import React from 'react'
import EventsData from "./Eventsdata.jsx"
import { FaSearch } from "react-icons/fa";
import Card from '../../Components/Card/Card.jsx';
import "./Events.scss"

const Events = () => {
    return (
        <div className='events'>

            <div className='events-header'>
                <div className='events-text'>Events</div>
            </div>

            <div className='search-blog'>
                <div className='search-icon'><FaSearch /></div>
                <input className='search-bar' type="text" placeholder='Search for any blog' />
                <button className='search-button'>Search</button>
            </div>


            <div className="eventsCardContainers">
                <div className="eventHeading1">Upcoming Events</div>
                <div className="cardContainer">
                    {EventsData.map((data, id) => {
                        return <Card data={data} key={id} />
                    })
                    }
                </div>

                <div className="eventHeading2">Post Events</div>
                <div className="cardContainer">
                    {EventsData.map((data, id) => {
                        return <Card data={data} key={id} />
                    })
                    }
                </div>
            </div>

        </div>
    )
}

export default Events
