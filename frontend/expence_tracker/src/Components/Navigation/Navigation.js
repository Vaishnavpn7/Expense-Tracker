import styled from 'styled-components';
import avatar from '../../img/avatar.png'
import { menuItems } from '../../utils/menuItems';
import { dollar, } from '../../utils/Icons';
import { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import SignOut from '../SignOut/SignOut';


const Navigation = ({active, setActive}) => {

    const {getProfile, profile,totalBalance} = useGlobalContext()

    useEffect(() =>{

        getProfile()
    
      }, [])


    
  return (
    <NavStyled>

        <div className='user-con'>
            <img src={avatar} alt=''/>
            <div className='text'>
            <h3>{profile.username}</h3>
            <p>{dollar} {totalBalance()}</p>
            </div>
        </div>

        <ul className='menu-items'>

            {menuItems.map((item) =>{
                return <li key={item.id} onClick={()=>setActive(item.id)} className={active === item.id ? 'active' : ''}>
                    
                {item.icon}
                <span>{item.title}</span>
                
                </li>
            })}

        </ul>

        <SignOut />
        
    </NavStyled>
  )
}



const NavStyled = styled.nav`
  padding: 2vw 1.5vw; /* Using vw for padding */
  width: 25vw; /* Using vw for width */
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 0.3vw solid #FFFFFF; /* Using vw for border */
  backdrop-filter: blur(0.45vw); /* Using vw for blur */
  border-radius: 3.2vw; /* Using vw for border radius */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2vw; /* Using vw for gap */

  @media (max-width: 768px) {
    width: 100%;
  }

  .user-con {
    height: 10vw; /* Using vw for height */
    display: flex;
    align-items: center;
    gap: 1vw; /* Using vw for gap */

    img {
      width: 6vw; /* Using vw for width */
      height: 6vw; /* Using vw for height */
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 0.2vw solid #FFFFFF; /* Using vw for border */
      padding: 0.02vw; /* Using vw for padding */
      box-shadow: 0px 0.1vw 1.7vw rgba(0, 0, 0, 0.06); /* Using vw for box shadow */
    }

    h2 {
      color: rgba(34, 34, 96, 1);
      font-size: 1.2vw; /* Using vw for font size */
    }

    p {
      color: rgba(34, 34, 96, 0.6);
      font-size: 1.8vw; /* Using vw for font size */
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 4vw auto; /* Using vw for grid template columns */
      align-items: center;
      margin: 0.6vw 0; /* Using vw for margin */
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1vw; /* Using vw for padding left */
      position: relative;

      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1vw; /* Using vw for font size */
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;

    i {
      color: rgba(34, 34, 96, 1) !important;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0.4vw; /* Using vw for width */
      height: 100%;
      background: #222260;
      border-radius: 0 1vw 1vw 0; /* Using vw for border radius */
    }
  }
`;





export default Navigation