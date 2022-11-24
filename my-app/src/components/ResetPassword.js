import { useState } from 'react';
import Input from './Input';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="rp-container">
      <h1 className='rp-title'>Reset your password</h1>
      <form className='rp-form' onSubmit={null}>
        <div className='rp-input'>
            <Input type='email' label='Email Address' value={email} onChange={e => setEmail(e.target.value)} required/>
        </div>

        <button className='submit-button'>Send reset link</button>
      </form>
    </div>
  );
};

export default ResetPassword;
