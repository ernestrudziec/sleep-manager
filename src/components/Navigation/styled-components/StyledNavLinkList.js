import React from 'react';
import styled from 'styled-components';

const StyledNavLinkList = styled.ul`

display: flex;
padding: 0;
justify-content: space-between;
align-items: center;
width: auto;
list-style: none;
text-transform: uppercase;
letter-spacing: 3px;


margin-right: 100px;

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
 margin: 0 0em;
 transition: transform 0.5s;
 
:hover{
font-weight: 600;
transform: scale(1.02);


}
}

`;

export default StyledNavLinkList;