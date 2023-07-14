import React from 'react'
import Card from '../../Components/Card/Card';
import "./Blogs.scss"
import {FaSearch} from "react-icons/fa";
import BlogData from "./BlogData.jsx"



function Blogs(){
    return(
        <div className='blogs'>
            <div className='blogs-header'>
            <div className='blog-text'>Insightful</div>
            <div className='blog-text1'>blogs for u</div>
            </div>
            <div className='search-blog'>
            <div className='search-icon'><FaSearch/></div>   
            <input className='search-bar' type="text" placeholder='Search for any blog'/>
            <button className='search-button'>Search</button>
            </div>
            <div className="cardContainer">
                {BlogData.map((data,id)=>{
                    return <Card data={data} key={id}/>
                })
            }
            </div>
        </div>
    )
}
export default Blogs;