import React, { useState } from "react";
import person from '../assets/person.png';
import email from '../assets/email.png';
import password from "../assets/password.png";
import './LoginSignup.css'


const LoginSignup = () => {
    // const [formData, setFormData] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    // });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };
    const[action,setAction]=useState("Sign Up")

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:
                <div className="input">
                <img src={person} alt="Person Icon" />
                <input type="text" placeholder="Name" />
            </div>}
                

                <div className="input">
                    <img src={email} alt="Email Icon" />
                    <input type="email" placeholder="Email id"/>
                </div>

                <div className="input">
                    <img src={password} alt="Password Icon" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>: <div className="forget-password">Lost Password? <span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;
