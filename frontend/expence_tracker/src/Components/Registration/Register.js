import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../img/bg.png'
import Button from '../Button/Button';
// import Orb from '../Orb/Orb';

const Register = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/register/', formData);

      console.log('Registration successful:', response.data);
      // Redirect to login page
      history('/');
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };

  // const orbMemo = useMemo(()=>{
  //   return <Orb />
  // },[])

  return (
    <CenteredCard bg={bg}>
        {/* {orbMemo} */}
      <h2>Registration Page</h2>
      <FormStyled onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            placeholder='Enter Username'
            value={formData.username}
            onChange={handleChange}
          />
        <br />

          <input
            type="email"
            name="email"
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleChange}
          />
        <br />
          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            value={formData.password}
            onChange={handleChange}
          />
        <br />
        <div className="submit-btn">
        <Button
                    name={'Register'}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
        </div>      </FormStyled>
    </CenteredCard>
  );
};

const CenteredCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${props => props.bg});
  background-size: cover; /* Ensure the background image covers the entire container */

  .register-btn {
    button {
      box-shadow: 0px 0.2vw 2vw rgba(0, 0, 0, 0.06); /* Using 0.2vw and 2vw as relative values */

      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw; /* Using 1vw as a relative value for gap */
  background: #FCF6F9;
  border: 0.2vw solid #FFFFFF; /* Using 0.2vw as a relative value for border */
  box-shadow: 0px 0.2vw 2vw rgba(0, 0, 0, 0.06); /* Using 0.2vw and 2vw as relative values */
  border-radius: 1.5vw; /* Using 1.5vw as a relative value for border-radius */
  padding: 1vw; /* Using 1vw as a relative value for padding */
  margin: 1vw 0; /* Using 1vw as a relative value for margin */
  width: 40%; /* Using percentage for width */

  input,
  textarea,
  select {
    font-family: inherit;
    font-size: 1em; /* Using em for font size */
    outline: none;
    border: none;
    padding: 1vw 2vw; /* Using 1vw and 2vw as relative values for padding */
    border-radius: 0.5vw; /* Using 0.5vw as a relative value for border-radius */
    border: 0.2vw solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 0.2vw 2vw rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);

    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }

  .input-control {
    input {
      width: 100%;
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 0.2vw 2vw rgba(0, 0, 0, 0.06);

      &:hover {
        background: var(--color-green) !important;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 1vw;
    width: 90%; /* Using percentage for width */
    padding: 0.5vw; /* Using 0.5vw as a relative value for padding */
  }
`;


export default Register;
