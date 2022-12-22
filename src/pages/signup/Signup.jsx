import { useState, useEffect } from 'react';
import './signup.css';
import axios from '../../utils/axios';
import {useNavigate} from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate()
    const [username , setUsername] = useState('');
    const [password, setPassword] =useState('');
    const [fullname, setFullname] =useState('');
    const [phonenumber, setPhonenumber] =useState('');
    const [email, setEmail] =useState('');

    const handleSubmitSignup = async(e) => {
        // e.preventDefault();
        const newuser = {
            username,
            password,
            fullname,
            phonenumber,
            email
        }
        // console.log(newuser);
        try {
            const response = await axios.post(
                '/signup',
                JSON.stringify(newuser),
                {
                    headers: { "Content-Type": "application/json" },
                    // withCredentials: true //??
                } 
            )
            console.log('response',response);
        } catch(error){
            console.log('error', error)
        }
        
        navigate("/home");
    }

    return (
 

        <div className="signup__body">
            <div className="card">
                <div className="d-flex flex-column card-body" >

                    <h1 className="text-center">Sign up</h1>
                    <form className="d-grid gap-3" onSubmit={handleSubmitSignup}>

                        <label md={2} htmlFor="username">User name {''}</label>
                            <input type="text" name="username"
                             value={username}
                             onChange={(e)=> setUsername(e.target.value)}
                             />

                        <label htmlFor="username">Password</label>
                            <input type="password" name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        

                        <label htmlFor="fullname">Full name</label>
                            <input type="text" name="fullname" 
                            value={fullname}
                            onChange={(e)=> setFullname(e.target.value)}/>
                        

                        <label htmlFor="phonenumber">Phone number </label>
                            <input type="text" name="phonenumber" 
                            value={phonenumber}
                            onChange={(e)=> setPhonenumber(e.target.value)}/>
                       

                        <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)} />
                        
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </form>
                    
                </div>
            </div>
            </div>
    )
}

export default Signup;