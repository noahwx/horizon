import { useState } from 'react';
import Input from './Input';


const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className='SignUp'>
            <div className='SU-title-container'>
                <h1 className='SU-title'>Sign Up</h1>
            </div>
            <form className='SU-form'>
                <div className='form-r1'>
                    <label className='form-label'>First Name</label>
                    <Input className='form-input' value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                    <label className='form-label'>Last Name</label>
                    <Input className='form-input' value={lastName} onChange={e => setLastName(e.target.value)} required/>
                    <label className='form-label'>Username</label>
                    <Input className='form-input' value={userName} onChange={e => setUserName(e.target.value)} required/>
                </div>

                <label className='form-label'>Email</label>
                <Input className='form-input' type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <label className='form-label'>Password</label>
                <Input className='form-input' type="password" value={password} onChange={e => setPassword(e.target.value)} required/>

                <button type='submit' className='submit-button'>Create Account</button>
            </form>
        </div>
    );
  };
  
  export default SignUp;
  