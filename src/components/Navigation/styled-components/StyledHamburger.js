import React from 'react';
import styled, { css} from 'styled-components';

const StyledHamburger = styled.button`

width: 50px;
height: 50px;
cursor: pointer;
background: transparent;
border: none;
outline: none;


i{
font-size: 3em;
color: black;
transition: 0.3s;
}

i:nth-child(1){
display: initial;

}

i:nth-child(2){
display: none;

}

${({opened}) => opened &&
    css`
     
    
    i{


    position: fixed;
    z-index: 999;
    color: black;
    }
     i:nth-child(1){
     display: none;
    
     }
     
     i:nth-child(2){
     display: initial;
   
  
     
     }
      
     `}

@media screen and (min-width: 1200px){
display: none;
}
`;

export default StyledHamburger;