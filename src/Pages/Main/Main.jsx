import React from 'react';
import './Main.scss';
import Navbar from '../../Components/Navbar/Navbar';
import HomeSection from '../../Components/HomeSection/HomeSection';
import Home1 from '../../Assets/images/home1.png';
import groupIcons from '../../Assets/images/groupIcons.png';
import Achieve from '../../Assets/images/achievement.png';
import Ellipse1 from '../../Assets/images/Ellipse1.png';
import Resource from '../../Assets/images/resource.png';
import Girls from '../../Assets/images/girls_group.png';
import Footer from '../../Components/Footer/Footer';

const Main = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <div className='slide-1'>
          <HomeSection
            title='Curious Minds striving to Learn'
            titleColor='black'
            description='We develop skills in multiple domains related to tech and design. Skills that will help you gain recognition in the industry and help you grow.'
            buttonText='Join us'
            buttonBackground='#1071FF'
          />
          <img src={Home1} alt='' className='slide-1-img' />
        </div>
        <div className='slide-2'>
          <img src={groupIcons} alt='' className='slide-2-img' />
          <HomeSection
            title='Know the world you want to dive in'
            titleColor='black'
            description='A bunch of interesting and innovative projects, showing skills and expertise of members in their respective fields.'
            buttonText='Have a look'
            buttonBackground='#FF7610'
          />
        </div>
        <div className='slide-1'>
          <HomeSection
            title='Achievements that make us proud'
            titleColor='black'
            description='The shine and glory we achieved through the hardwork of our  talented and optimistic members.'
            buttonText='Have a Look'
            buttonBackground='#1071FF'
          />
          <div className='achieve_ellipse_images'>
            <img src={Achieve} alt='' className='slide-1-img' />
            <img src={Ellipse1} alt='' className='ellipse1' />
          </div>
        </div>
        <div className='slide-3'>
        
            <img src={Resource} alt='' className='slide-2-img' />
          <HomeSection
            title='Insightful resources  and sessions that will help you grow'
            titleColor='white'
            description='Blogs , Articles , Books etc, curated by core members of zairza.'
            buttonText='Get More'
            buttonBackground='#FF7610'
          />
        </div>
        <div className='slide-4'>
          <div className='email-box'>
            <h1>Wanna Join Us ?</h1>
            <p>Give us your email Id.we will reach out to you.</p>
            <input
              type='email'
              placeholder='Email here'
              className='email-input-box'
            />
            <p>
              Already a member?<span className='logintext'>Log In</span> to
              learn and grow
            </p>
            <HomeSection buttonText="Let's Go" buttonBackground='#1071FF' />
          </div>
        </div>
        <div className='slide-1' style={{ backgroundColor: '#E7F1FF' }}>
          <HomeSection
            title='Wanna know more about the team'
            titleColor='black'
            description='We develop skills in multiple domains related to tech and design. Skills that will help you gain recognition in the industry and help you grow.'
            buttonText='Visit team'
            buttonBackground='#1071FF'
          />
          <img src={Girls} alt='' className='slide-1-img' />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
