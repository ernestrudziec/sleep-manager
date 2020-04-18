import React from 'react';
import styled, { css } from 'styled-components';

const StyledNavLinkList = styled.ul`

display: flex;
padding: 0;
justify-content: space-between;
align-items: center;
width: auto;

list-style: none;
text-transform: uppercase;
letter-spacing: 2px;
transition: 0.3s;

img{
display: none;
}

a{
text-decoration: none;
color: black;
}

li{
 width: 140px;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 text-decoration: none;

 transition: transform 0.5s;
 
:hover{
font-weight: 600;
transform: scale(1.02);


}
}


@media screen and (max-width: 1200px){
display: none;
height: 0;


}

${({opened}) => opened &&
    css`
display: flex !important;
     position: fixed;
z-index: 999;
top: -3vh;
left: 0;
right: 0;
bottom: 0;
height: 103vh !important;
justify-content: center;
flex-direction: column;
background: white;

img{
display: initial;
}

li{
margin-top: 1em;

font-size: 2em;
font-weight: 900;
width: auto;
display: flex;


}
`}

`;

export default StyledNavLinkList;