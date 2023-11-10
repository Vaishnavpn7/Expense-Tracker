import { useGlobalContext } from '../../context/GlobalContext';
import DateFormat from '../../utils/DateFormat';
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'




ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses, } = useGlobalContext()

    const data = {
        labels: incomes.map((inc) =>{
            const {date} = inc
            return DateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }




    return (
        <ChartStyled >
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
  background: #FCF6F9;
  border: 0.2vw solid #FFFFFF; /* Using 0.2vw as a relative value for border */
  box-shadow: 0px 0.2vw 2vw rgba(0, 0, 0, 0.06); /* Using 0.2vw and 2vw as relative values for box-shadow */
  padding: 1vw; /* Using 1vw as a relative value for padding */
  border-radius: 2vw; /* Using 2vw as a relative value for border-radius */
  height: 100%;
`;



export default Chart