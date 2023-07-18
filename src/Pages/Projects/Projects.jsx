import React from 'react'
import Card from '../../Components/Card/Card';
import "./Projects.scss"
import {FaSearch} from "react-icons/fa";
import ProjectsData from './ProjectsData';
import FilterAltIcon from '@mui/icons-material/FilterAlt';



function Projects(){
    return(
        <div className='projects'>
            <div className='projects-header'>
            <div className='projects-text'>Projects</div>
            </div>
            <div className='projects-mid'>
            <div className='search-projects'>
            <div className='search-icon'><FaSearch/></div>   
            <input className='search-bar' type="text" placeholder='Search for any blog'/>
            <button className='search-button'>Search</button>
            </div>
            <div className='projects-filter'>
            <div className='filter-text'>Filter</div>
            <FilterAltIcon></FilterAltIcon>
            </div>
            </div>
            <div className="cardContainer">
                {ProjectsData.map((data,id)=>{
                    return <Card data={data} key={id}/>
                })
            }
            </div>
        </div>
    )
}
export default Projects;