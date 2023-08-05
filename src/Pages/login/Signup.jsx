import React, { useState } from 'react'
import "./Login.scss"
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import loginImg from '../../Assets/images/achievement_slide_img.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
const Signup = () => {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [conPass,setConPass]=useState("");
    const [showPass,setShowPass]=useState(false);
    const [type,setType]=useState('password');
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(conPass===pass){
            alert("Successfully submitted")
        }
        else{
            alert("Invalid Password")
        }
    }
    const passwordView=(event)=>{
        event.preventDefault();
        if(type==='password'){
            setType('text');
        }
        else{
            setType('password');
        }
        setShowPass(!showPass);
    }
  return (
    <div>
        <div className='loginPage'>
        <div className='loginImage'>
            <img src={loginImg} alt="loginImg"/>
        </div>
        <div className='loginPart'>   
            <form onSubmit={handleSubmit} className='loginContainer'>
                <h1 className='signInHeader'>Sign Up</h1>
                <div className='loginInputContainer'><label htmlFor="email">Email</label>
                <input value={email} type="email" placeholder='Enter your email' required onChange={(e)=>setEmail(e.target.value)}/>
                <span className='inputIcon'>
                    <EmailIcon/>
                </span></div>
                
                <div className='loginInputContainer'>
                <label htmlFor="password">Password</label>
                <input  value={pass} type={type} placeholder='Enter your password' onChange={(e)=>setPass(e.target.value)}/>
                <span onClick={passwordView} className='inputIcon'>
                    {showPass ? (<VisibilityOffIcon/>):(<VisibilityIcon/>)}
                </span>
                {/* <span className='fPass'>Forgot Password?</span> */}
                
                </div>

                <div className='loginInputContainer'>
                <label htmlFor="password">Confirm Password</label>
                <input  value={conPass} type={type} placeholder='Enter your password' onChange={(e)=>setConPass(e.target.value)}/>
                <span onClick={passwordView} className='inputIcon'>
                    {showPass ? (<VisibilityOffIcon/>):(<VisibilityIcon/>)}
                </span>
                {/* <span className='fPass'>Forgot Password?</span> */}
                
                </div>
                <button className="submitBtn" type='submit' onClick={handleSubmit}>Sign Up</button>
                <div className='loginOr'>OR</div>
                <div className='loginIconContainer'>
                <span className='loginIcon google'><GoogleIcon/></span>
                    <span className='loginIcon gh'><GitHubIcon/></span>
                </div>
                <span className='noAccount'>Already have an account? <Link to="/login">Sign In</Link></span>
            </form>
            
        </div>
    </div>
    </div>
  )
}

export default Signup