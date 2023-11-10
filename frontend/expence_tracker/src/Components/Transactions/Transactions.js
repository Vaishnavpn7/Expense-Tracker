import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext'

const Transactions = () => {

    const {TotalHistory} = useGlobalContext()

    const [...history] = TotalHistory()

    return (
        <TransactionsStyled>
            <h2 style={{ textAlign: 'center' }}>All Transactions</h2>
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
        </TransactionsStyled>




  )
}

const TransactionsStyled = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

.history-item {
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 768px) {
    /* Adjust styles for screens with a maximum width of 768px */
    .history-item {
        flex-direction: column; /* Stack content vertically on small screens */
    }
}
`;

export default Transactions