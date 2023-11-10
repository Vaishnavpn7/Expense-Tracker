import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext'


function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw; /* Using 1vw as a relative value for gap */

  .history-item {
    background: #FCF6F9;
    border: 0.2vw solid #FFFFFF; /* Using 0.2vw as a relative value for border */
    box-shadow: 0px 0.1vw 1vw rgba(0, 0, 0, 0.06); /* Using 0.1vw and 1vw as relative values for box shadow */
    padding: 1vw; /* Using 1vw as a relative value for padding */
    border-radius: 2vw; /* Using 2vw as a relative value for border radius */
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;


export default History