import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard'
import Income from './Components/Incomes/Income'
import Expenses from './Components/Expenses/Expenses'
import { useGlobalContext } from './context/GlobalContext'
import Transactions from './Components/Transactions/Transactions'



const Home = () => {
  const [active, setActive] = useState(1)

  const global =  useGlobalContext()

  console.log(global);


  const displayData = () => {
    switch (active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transactions />
      case 3:
        return <Income/>
      case 4:
        return <Expenses />
      default:
        return <Dashboard/>
    }
  }


  const orbMemo = useMemo(()=>{
    return <Orb />
  },[])


  return (
    <HomeStyled bg={bg} className='App'>

      {orbMemo}

      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>

          {displayData()}

        </main>
      </MainLayout>

            
      </HomeStyled>
  )
}

const HomeStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;

  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 0.3vw solid #FFFFFF; /* Using 0.3vw as a relative value for border */
    backdrop-filter: blur(0.45vw); /* Using 0.45vw as a relative value for blur */
    border-radius: 3.2vw; /* Using 3.2vw as a relative value for border-radius */
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }

    @media (max-width: 768px) {
      border: 0.1vw solid #FFFFFF; /* Using 0.1vw as a relative value for border */
      border-radius: 1.6vw; /* Using 1.6vw as a relative value for border-radius */
    }
  }
`;



export default Home



