import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styled from 'styled-components';
import bg from '../../img/bg.png'



function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const history = useNavigate(); // Create a history object

  const handleRegisterClick = () => {
    // Navigate to the register page
    history('/register');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login/', formData);
      const token = response.data.token; // Access the token field directly

      // Save the token to localStorage
      localStorage.setItem('token', token);

      // Redirect to the '/home' route
      history('/home');
    } catch (error) {

      if (error.response.data.error) {
        const errorMessage = error.response.data.error; // Assuming the error message is under 'error' field
        alert(`Login failed: ${errorMessage}`);
      } else {
        // Handle other types of errors, e.g., network issues
        alert('An error occurred during login.');
      }
    }
  };

  // const orbMemo = useMemo(()=>{
  //   return <Orb />
  // },[])

  return (
    <CenteredCard bg={bg} className='App'>
            {/* {orbMemo} */}

            

      <FormStyled onSubmit={handleLogin}>
      
        <h2>Login</h2>

        <div className='input-control'>
          <input
            type="text"
            name="username"
            placeholder='Enter Username'
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className='input-control'>
          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="submit-btn">
        <Button 
                    name={'Login'}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
        </div>


      </FormStyled>

      <div className="register-btn">
        <h3>New User? </h3>

        <Button
            name={'Register'}
            bPad={'.8rem 1.6rem'}
            bRad={'3px'}
            bg={'red'}
            color={'#fff'}
            onClick={handleRegisterClick}
          />
        
      </div> 
         
      
    </CenteredCard>
  );
}



const CenteredCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${props => props.bg});
  background-size: cover; /* Ensure the background image covers the entire container */

  .register-btn {
    display: flex;
    justify-content: flex-start;  
    align-items: center; 
    margin-bottom: 1vw; /* Using 1vw as a relative value for margin */
    gap: 2vw; /* Using 2vw as a relative value for gap */

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
  gap: 2rem;
  background: #FCF6F9;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 1px 2vw rgba(0, 0, 0, 0.06); /* Using 2vw as a relative value for box-shadow */
  border-radius: 2vw; /* Using 2vw as a relative value for border-radius */
  padding: 2vw; /* Using 2vw as a relative value for padding */
  margin: 2vw 0; /* Using 2vw as a relative value for margin */
  width: 80%; /* Using percentage for width */

  input,
  textarea,
  select {
    font-family: inherit;
    font-size: 1em; /* Using em for font size */
    outline: none;
    border: none;
    padding: 1% 2%; /* Using percentage for padding */
    border-radius: 0.5vw; /* Using 0.5vw as a relative value for border-radius */
    border: 0.2vw solid #fff; /* Using 0.2vw as a relative value for border width */
    background: transparent;
    resize: none;
    box-shadow: 0px 0.2vw 2vw rgba(0, 0, 0, 0.06); /* Using 0.2vw and 2vw as relative values */
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
      box-shadow: 0px 0.2vw 2vw rgba(0, 0, 0, 0.06); /* Using 0.2vw and 2vw as relative values */

      &:hover {
        background: var(--color-green) !important;
      }
    }
  }

  @media (max-width: 768px) {
    /* Adjust styles for screens with a maximum width of 768px */
    width: 90%; /* Using percentage for width */
    padding: 1vw; /* Using 1vw as a relative value for padding */
    gap: 1rem;
    font-size: 1em; /* Using em for font size */
  }
`;




export default Login;
