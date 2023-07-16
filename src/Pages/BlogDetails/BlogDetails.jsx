import React from 'react'
import Card from '../../Components/Card/Card';
import "./BlogDetails.scss";
import BlogData from '../Blogs/BlogData';
import BlogsDetailCard from '../../Components/Card/Blogs_detail_card';
import BlogsImg2 from '../../Assets/images/brando-makes-branding-B0kRAfteJZY-unsplash 1.png';

const BlogDetails = () => {
  return (
    <div className='blogs'>
    <div className='blogs-header'>
    <div className='blogs-time'>20 March, 2023, 1 Day ago</div>
        <div className='blog-text'>A long Title of the blog</div>
        <div className='blog-text1'>appears here</div>
    </div>
    <div className='blogs-detail'>
        <div className='blogs-detail-section1'>
            <div className='blogs-detail-text'>
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
            <div className='blogs-detail-img'>
                <BlogsDetailCard />
            </div>
        </div>
        <div className='blogs-detail-section2'>
            <div className='blogs-detail-img2'>
                <img src={BlogsImg2} alt="" />
            </div>
            <div className='blogs-detail-text2'>
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
    {BlogData.map((data,id)=>{
        return <Card data={data} key={id}/>
    })
}
</div>
</div>
</div>
  )
}

export default BlogDetails