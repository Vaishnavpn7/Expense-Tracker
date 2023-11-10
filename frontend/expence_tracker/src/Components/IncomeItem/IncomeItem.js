import React from 'react'
import styled from 'styled-components'
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, trash, tv } from '../../utils/Icons';
import Button from '../Button/Button';
import DateFormat from '../../utils/DateFormat';



const IncomeItem = ({ id, title, amount, date, category, description, deleteItem, indicatorColor}) => {

  const categoryIcon = () => {
    switch (category) {
      case 'Salary':
        return money;
      case 'Freelancing':
          return freelance
      case 'Investments':
          return stocks;
      case 'Crypto':
          return bitcoin;
      case 'Bank':
          return card;
      case 'Others':
          return piggy;
      default:
          return ''
    }
  }

  const expenseCatIcon = () => {

    switch (category) {
      case 'Education':
          return book;
      case 'Groceries':
          return food;
      case 'Health':
          return medical;
      case 'Subscriptions':
          return tv;
      case 'Clothing':
          return clothing;
      case 'Travelling':
          return freelance;
      case 'Other':
          return circle;
      default:
          return ''
  }


  }
  return (
    <IncomeItemStyled indicator={indicatorColor}>

        <div className='icon'>

          {expenseCatIcon()}
          {categoryIcon()}

        </div>

        <div className='content'>
            <h5>{title}</h5>
            <div className='inner-content'>
              <div className='text'>
                <p>{dollar} {amount}</p>
                <p>{calender} {DateFormat(date)}</p>
                <p>
                  {comment}
                  {description}
                </p>

              </div>
              <div className='btn-con'>
                <Button 
                  icon={trash}
                  bPad={'1rem'}
                  bRad={'50%'}
                  bg={'var(--primary-color'}
                  color={'#fff'}
                  iColor={'#fff'}
                  hColor={'var(--color-green)'}
                  onClick={() => deleteItem(id)}
                />
              </div>
            </div>
        </div>


    </IncomeItemStyled>
  )
}

const IncomeItemStyled = styled.div`
  background: #FCF6F9;
  border: 0.1vw solid #FFFFFF; /* Using 0.1vw as a relative value for border */
  box-shadow: 0px 0.1vw 1vw rgba(0, 0, 0, 0.06); /* Using 0.1vw and 1vw as relative values for box shadow */
  border-radius: 1.5vw; /* Using 1.5vw as a relative value for border radius */
  padding: 0.4vw; /* Using 0.4vw as a relative value for padding */
  margin-left: 0.5vw; /* Using 0.5vw as a relative value for left margin */
  margin-bottom: 0.5vw; /* Using 0.5vw as a relative value for bottom margin */
  display: flex;
  align-items: center;
  gap: 0.5vw; /* Using 0.5vw as a relative value for gap */
  width: 100%;
  color: #222260;

  .icon {
    width: 6vw; /* Using 6vw as a relative value for the width of the icon container */
    height: 0.8vw; /* Using 0.8vw as a relative value for the height of the icon container */
    border-radius: 1.5vw; /* Using 1.5vw as a relative value for border radius */
    background: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2vw solid #FFFFFF; /* Using 0.2vw as a relative value for border */

    i {
      font-size: 2vw; /* Using 2vw as a relative value for font size of the icon */
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.1vw; /* Using 0.1vw as a relative value for gap between content items */

    h5 {
      font-size: 1vw; /* Using 1vw as a relative value for font size */
      padding-left: 1vw; /* Using 1vw as a relative value for left padding */
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.3vw; /* Using 0.3vw as a relative value for the width of the indicator */
        height: 0.3vw; /* Using 0.3vw as a relative value for the height of the indicator */
        border-radius: 50%;
        background: ${props => props.indicator};
      }
    }

    .inner-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      .text {
        display: flex;
        align-items: center;
        gap: 0.5vw; /* Using 0.5vw as a relative value for gap between text items */

        p {
          display: flex;
          align-items: center;
          gap: 0.1vw; /* Using 0.1vw as a relative value for gap between text elements */
          color: var(--primary-color);
          opacity: 0.8;
          font-size: 0.8vw; /* Using 0.8vw as a relative value for font size */
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;





export default IncomeItem