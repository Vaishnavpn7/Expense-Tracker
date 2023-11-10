import React, { useState } from 'react'
import styled from 'styled-components'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/GlobalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';




const Forms = () => {


const {addIncome, getIncomes, error, setError} = useGlobalContext()

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;


    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }


    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        getIncomes()
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',

        })
    }


  return (
    <FormStyled onSubmit={handleSubmit}>
        {error && <p className='error'>{error}</p>}

        <div className='input-control'>
            <input type='text' value={title} name={title} placeholder='Title' onChange={handleInput('title')} />
        </div>
        <div className="input-control">
            <input value={amount} type="text" name={'amount'} placeholder={' Amount'} onChange={handleInput('amount')} />
        </div>


        <div className="input-control">
        <input value={date} type="date" name={'date'} placeholder={' Enter Date'} dateformat="yyyy/MM/dd" onChange={handleInput('date')} />
        </div>

        <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Choose Category</option>
                    <option value="Crypto">Crypto</option>
                    <option value="Salary">Salary</option>
                    <option value="Freelancing">Freelancing</option>
                    <option value="Investments">Investments</option>
                    <option value="Bank">Bank</option>
                    <option value="Others">Other</option>  
                </select>
        </div>

        <div className="input-control">
            <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
        </div>

        <div className="submit-btn">
        <Button 
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
        </div>

    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1vw; /* Using 1vw as a relative value for gap */

  input,
  textarea,
  select {
    font-family: inherit;
    font-size: 1vw; /* Using 1vw as a relative value for font size */
    outline: none;
    border: none;
    padding: 0.4vw 0.8vw; /* Using 0.4vw and 0.8vw as relative values for padding */
    border-radius: 0.4vw; /* Using 0.4vw as a relative value for border radius */
    border: 0.1vw solid #fff; /* Using 0.1vw as a relative value for border thickness */
    background: transparent;
    resize: none;
    box-shadow: 0px 0.1vw 1vw rgba(0, 0, 0, 0.06); /* Using 0.1vw and 1vw as relative values for box shadow */
    color: rgba(34, 34, 96, 0.8);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }

  .input-control {
    input {
      width: 100%;
    }
  }

  .selects {
    display: flex;
    select {
      font-size: 1vw; /* Using 1vw as a relative value for font size */
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 0.8);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 0.1vw 1vw rgba(0, 0, 0, 0.06); /* Using 0.1vw and 1vw as relative values for box shadow */
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;




export default Forms





















