import React from 'react'
import "./Team.scss"
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"

const Team = () => {
    return (

        <div className="container">
            <div className="upper">
                <div className="upperleft" style={{margin:"auto"}}>
                    <h1 style={{margin:"auto"}} >lets meet our team</h1>

                </div>
                <div className="upperright">

                    <p>React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.</p>
                </div>
            </div>
            <div className='teamlower'>

                <div className="teamcards">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5ODIyNTAxfHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" srcset="" />
                    <div className="desc">
                        <h3>Title</h3>
                        <p>Co-ordinator</p>
                        <FaRegEnvelope id="icon" />
                    </div>
                </div>
                <div className="teamcards">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5ODIyNTAxfHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" srcset="" />
                    <div className="desc">
                        <h3>Title</h3>

                        <p>Co-ordinator</p>

                        <FaRegEnvelope id="icon" />

                    </div>
                </div>
                <div className="teamcards">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5ODIyNTAxfHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" srcset="" />
                    <div className="desc">
                        <h3>Title</h3>
                        <p>Co-ordinator</p>
                        <FaRegEnvelope id="icon" />
                    </div>
                </div>
                <div className="teamcards">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5ODIyNTAxfHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" srcset="" />
                    <div className="desc">
                        <h3>Title</h3>
                        <p>Co-ordinator</p>
                        <FaRegEnvelope id="icon" />
                    </div>
                </div>

                
            </div>


        </div>



    )
}

export default Team