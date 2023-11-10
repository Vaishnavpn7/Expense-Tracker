import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signout } from '../../utils/Icons';
import Button from '../Button/Button';

const SignOut = () => {
  const history = useNavigate();

  const handleSignOut = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');

    // Redirect to the login page
    history('/');
  };

  return (
    <div className='bottom-nav'>
      <li onClick={handleSignOut}>
                <Button
                    name={'LogOut !'}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
      </li>
    </div>
  );
};

export default SignOut;
