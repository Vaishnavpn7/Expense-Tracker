import React from 'react'
import styled from 'styled-components'

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 1vw; /* Using vw for relative font size */
  display: flex;
  align-items: center;
  gap: 0.2vw; /* Using vw for relative gap */
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  padding: 0.2vw 0.4vw; /* Using vw for relative padding */
`;






export default Button