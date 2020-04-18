import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`

min-height: 50vh;
width: 100vw;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
margin: 0;
padding: 0;


div{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 25%;
background: #016E6E;
color: white;
padding: 2em;
border-radius: 10px;
height: 200px;
box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.01);

text-align: center;
margin: 0;

:nth-child(odd){
background: #02BABC;
}



i{
font-size: 5em;
margin-bottom: 0.2em;
}
p{
margin: 0;
padding: 0;
}
}
`;

export default StyledSection;