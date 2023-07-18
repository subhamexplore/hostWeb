import './eventudp.scss';
import orgimg from '../../Assets/images/organisers.png'

import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Eventudp = () => {

    const organisers = [
        {
            image: orgimg,
            name: "Gunjan Giri",
            domain: "Android Developer"
        },
        {
            image: orgimg,
            name: "Prateek Mohanty",
            domain: "Web Developer"
        },
        {
            image: orgimg,
            name: "Gunjan Giri",
            domain: "Android Developer"
        },
        {
            image: orgimg,
            name: "Prateek Mohanty",
            domain: "Web Developer"
        }
    ]

    return (
        <>
            <div className="eudp">
                <div className="eudp_top">
                    <div className="eudp_titles">
                        <h1 className="event_title">Events Title Appears Here</h1>
                        <div className="date_time">
                            <p>5th May, 2022</p>
                            <p className='eudp_dot' >.</p>
                            <p>12:30 AM</p>
                        </div>
                    </div>
                </div>
                <div className="eudp_mid">
                    <div className="abtEvent">
                        <h3 style={{fontWeight: "bold", fontSize: "32px"}} >All About The Event</h3>
                        <div className="eveDesc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur possimus repellat fugit omnis dignissimos quo alias, esse aliquam? Eos animi harum fugit blanditiis ducimus, nostrum dignissimos quos? Consequuntur, sit nam! Facere sapiente vitae doloremque corporis, voluptas consequatur officia dolor ab nesciunt corrupti nulla recusandae maiores veritatis quas quibusdam vel!
                        </div>
                        <div className="dateTimeVenue">
                            <p><span className='dt' ><EventIcon style={{width:"14px", height:"14px"}} />&nbsp;Date: </span>5th May, 2022</p>
                            <p><span className='dt' ><AccessTimeIcon style={{width:"14px", height:"14px"}} />&nbsp;Time: </span>12:30 AM</p>
                            <p><span className='dt' ><LocationOnOutlinedIcon style={{width:"14px", height:"14px"}} />&nbsp;Venue: </span>Zairza Club</p>
                        </div>
                        <div className="preLink">
                            <a href="/">Click to Download the Pre-requisites for the event</a>
                        </div>
                    </div>
                    <div className="organisers">
                        <h3 className='orgheading' style={{fontWeight: "bolder", fontSize: "32px"}} >Organisers</h3>
                        <div className="orgdiv">
                            {
                                organisers?.map((item, id)=>(
                                    <div className="orgbox" key={id} >
                                        <img className='orgimg' src={item.image} alt="org" />
                                        <p className="name">{item.name}</p>
                                        <p className="domain">{item.domain}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="regibtn">
                    <button className="eudpRegBtn">Click here to register</button>
                    </div>
                </div>
                <div className="eudp_end"></div>
            </div>
        </>
    )
}

export default Eventudp
