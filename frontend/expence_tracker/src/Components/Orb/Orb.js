import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

const Orb = () => {


    const {width, height} = useWindowSize()


    const moveOrb = keyframes `

        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height/2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `;

    const OrbStyled = styled.div`
    width: 50%; /* Adjust the width based on your layout needs */
    padding-top: 50%; /* Maintain a 1:1 aspect ratio for a circular shape */
    position: absolute;
    border-radius: 50%;
    margin-left: -25%; /* Center the orb horizontally */
    margin-top: -25%; /* Center the orb vertically */
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(350px); /* Reduce the blur effect for better visibility */
    animation: ${moveOrb} 15s alternate linear infinite;
`;

// Define the keyframes for your animation (assuming "moveOrb" is defined)

  return (


    <OrbStyled></OrbStyled>
  )
}

export default Orb