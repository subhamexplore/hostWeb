import React from 'react'
import Card from '../../Components/Card/Card';
import "./ProjectsDetails.scss";
import ProjectsDetailsData from './ProjectsDetailsData';
import MenuIcon from '@mui/icons-material/Menu';
import Blogs_detail_card from '../../Components/Card/Blogs_detail_card';
import Blogs_img4 from '../../Assets/images/blogs-img-4.png';


const ProjectsDetails = () => {
    return (
        <div className='projectsDetails'>
            <div className='projectsDetails-header'>
                <div className='menuicon'>
                    <MenuIcon></MenuIcon>
                </div>
                <div className='projectsDetails-text'>Project Name</div>
                <div className='projectsDetails-text1'>20 March, 2023, 1 Day ago</div>
            </div>
            <div className='projectsDetails-detail'>
                <div className='projectsDetails-section1'>
                    <div className='projectsDetail-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendum pretium.
                            Suspendisse ligula neque, ultrices nec interdum faucibus, pharetra et libero. Vestibulum viverra
                            molestie nunc. Sed quis aliquet leo. In vel posuere tortor. Donec eros turpis, dictum vel vehicula
                            viverra, facilisis in mauris. Nullam rhoncus enim ligula, sit amet suscipit turpis dignissim non.
                            Proin consequat purus sit amet blandit sollicitudin. Aliquam in consequat libero. Morbi sollicitudin
                            dignissim erat laoreet interdum. Phasellus magna velit, consectetur iaculis tincidunt placerat, semper
                            non sem. Mauris in eleifend libero. Mauris vitae nibh sed felis aliquet dictum sed egestas mauris.
                            Sed varius est ac nulla eleifend sagittis. Praesent id aliquam eros, in semper est. Maecenas ex enim,
                            ornare ac auctor sit amet, interdum et justo. Aenean pellentesque magna ut nibh lobortis, sit amet vulputate
                            sem tristique. Ut ac ultrices lectus, id volutpat nisi. Aenean ipsum augue, mollis at sodales mollis, varius eu erat. </p>
                    </div>
                    <div className='projectsDetails-container'>
                        <div className='projectsDetails-context'>Projects done by</div>
                        <div className='projectsDetails-img'>
                           <div className='projectsCards'> <Blogs_detail_card /> </div>
                           <div className='projectsCards'> <Blogs_detail_card /> </div>
                           <div className='projectsCards'> <Blogs_detail_card /> </div>
                           <div className='projectsCards'> <Blogs_detail_card /> </div>
                        </div>
                    </div>
                </div>
                <div className='projectsDetails-section2'>
                    <div className='projectsDetails-img2'>
                        <img src={Blogs_img4} />
                    </div>
                    <div className='projectsDetails-text2'>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendum pretium. Suspendisse ligula neque, ultrices nec interdum faucibus, pharetra et libero. Vestibulum viverra molestie nunc. Sed quis aliquet leo. In vel posuere tortor. Donec eros turpis, dictum vel vehicula viverra, facilisis in mauris. Nullam rhoncus enim ligula, sit amet suscipit turpis dignissim non. Proin consequat purus sit amet blandit sollicitudin. Aliquam in consequat libero. Morbi sollicitudin dignissim erat laoreet interdum.
                            Phasellus magna velit, consectetur iaculis tincidunt placerat, semper non sem. Mauris in eleifend libero. Mauris vitae nibh sed felis aliquet dictum sed egestas mauris. Sed varius est ac nulla eleifend sagittis. Praesent id aliquam eros, in semper est. Maecenas ex enim, ornare ac auctor sit amet, interdum et justo. Aenean pellentesque magna ut nibh lobortis, sit amet vulputate sem tristique. Ut ac ultrices lectus, id volutpat nisi. Aenean ipsum augue, mollis at sodales mollis, varius eu erat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendum pretium. Suspendisse ligula neque, ultrices nec interdum faucibus, pharetra et libero. Vestibulum viverra molestie nunc. Sed quis aliquet leo. In vel posuere tortor. Donec eros turpis, dictum vel vehicula viverra, facilisis in mauris. Nullam rhoncus enim ligula, sit amet suscipit turpis dignissim non. Proin consequat purus sit amet blandit sollicitudin. Aliquam in consequat libero. Morbi sollicitudin dignissim erat laoreet interdum.
                            Phasellus magna velit, consectetur iaculis tincidunt placerat, semper non sem. Mauris in eleifend libero. Mauris vitae nibh sed felis aliquet dictum sed egestas mauris. Sed varius est ac nulla eleifend sagittis. Praesent id aliquam eros, in semper est. Maecenas ex enim, ornare ac auctor sit amet, interdum et justo. Aenean pellentesque magna ut nibh lobortis, sit amet vulputate sem tristique. Ut ac ultrices lectus, id volutpat nisi. Aenean ipsum augue, mollis at sodales mollis, varius eu erat.
                        </p>
                    </div>
                </div>
            </div>
            <div className='cards'>
                <h1 className='cards-title'>Other Similar Blogs</h1>
                <div className="cardContainer">
                    {ProjectsDetailsData.map((data, id) => {
                        return <Card data={data} key={id} />
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectsDetails;