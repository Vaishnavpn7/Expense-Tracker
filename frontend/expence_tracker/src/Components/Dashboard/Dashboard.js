
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import { useGlobalContext } from '../../context/GlobalContext';
import History from '../History/History';

function Dashboard() {
    const {totalExpense,incomes, expenses,totalBalance, totalIncome, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h3>Total Income</h3>
                                <p style={{ textAlign: 'center' }}>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h3>Total Expense</h3>
                                <p style={{ textAlign: 'center' }}>
                                    {dollar} {totalExpense()}
                                </p>
                            </div>
                            <div className="balance">
                                <h3>Your Balance</h3>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                      <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1vw; /* Using 1vw as a relative value for gap */

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .chart-con {
      grid-column: 1 / 4;
      height: 20vw; /* Using 20vw as a relative value for height */

      @media (max-width: 768px) {
        grid-column: auto;
        margin-top: 1vw; /* Using 1vw as a relative value for top margin */
        height: 30vw; /* Using 30vw as a relative value for height */
      }

      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1vw; /* Using 1vw as a relative value for gap */
        margin-top: 1vw;

        @media (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }

        .income,
        .expense {
          grid-column: span 2;
          p {
            font-size: 1vw; /* Adjusted to 1vw */
          }
        }
        .income,
        .expense,
        .balance {
          background: #FCF6F9;
          border: 0.2vw solid #FFFFFF;
          box-shadow: 0px 0.2vw 2vw rgba(0, 0, 0, 0.06);
          border-radius: 1.5vw;
          padding: 0.3vw; /* Adjusted to 0.5vw */
          p {
            font-size: 1.5vw; /* Adjusted to 1.5vw */
          }
        }
        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 2vw; /* Adjusted to 2vw */
          }
        }
      }
    }

    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1vw 0; /* Using 1vw as a relative value for margin */
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.5vw; /* Using 1.5vw as a relative value for font size */
      }
      .salary-title {
        font-size: 1vw; /* Using 1vw as a relative value for font size */
        span {
          font-size: 1.3vw; /* Using 1.3vw as a relative value for font size */
        }
      }
      .salary-item {
        background: #FCF6F9;
        border: 0.2vw solid #FFFFFF;
        box-shadow: 0px 0.2vw 2vw rgba(0, 0, 0, 0.06);
        padding: 0.5vw; /* Adjusted to 0.5vw */
        border-radius: 1.5vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1vw; /* Using 1vw as a relative value for font size */
        }
      }
    }
  }
`;







export default Dashboard