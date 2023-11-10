import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/GlobalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

const Expenses = () => {
  const {expenses, getExpenses, deleteExpense, totalExpense} = useGlobalContext()

  useEffect(() =>{

    getExpenses()

  }, [])
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h2>Expenses</h2>
        <h3 className='total-income'>Total Expense: <span>${totalExpense()}</span></h3>
        <div className='income-content'>
          <div className='form-container'>
            <ExpenseForm />
          </div>
          <div className='incomes'>
            {expenses.map((expense) => {
              
              const {id, title, amount, date, category, description, type} = expense;
              return <IncomeItem 

              key={id}
              id={id} 
              title={title} 
              description={description} 
              amount={amount} 
              date={date} 
              type={type}
              category={category}
              indicatorColor="var(--color-green)"
              deleteItem={deleteExpense}
      
              
              
              />

            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;

  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 0.2vw solid #FFFFFF; /* Using 0.2vw as a relative value for border */
    box-shadow: 0px 0.1vw 1vw rgba(0, 0, 0, 0.06); /* Using 0.1vw and 1vw as relative values for box shadow */
    border-radius: 1.5vw; /* Using 1.5vw as a relative value for border radius */
    padding: 0.5vw; /* Using 0.5vw as a relative value for padding */
    margin: 1vw 0; /* Using 1vw as a relative value for margin */
    font-size: 1.5vw; /* Using 1.5vw as a relative value for font size */
    gap: 0.25vw; /* Using 0.25vw as a relative value for gap */

    span {
      font-size: 2vw; /* Using 2vw as a relative value for font size */
      font-weight: 700;
      color: var(--color-green);
    }
  }

  .income-content {
    display: flex;
    gap: 1.5vw; /* Using 1.5vw as a relative value for gap */

    .incomes {
      flex: 1;
    }
  }

  .form-container {
    width: 25%;

    @media (max-width: 768px) {
      width: 100%; /* Take the full width for small screens */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;






export default Expenses