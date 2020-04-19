import React from 'react';
import styled from 'styled-components';
import project from '../../../assets/project.png';

export const StyledUl = styled.ul`

width: 100% !important;

li{

i{
width: 60px;
font-size: 3em !important;
margin-right: 0.5em;
}

position: relative;

height: 100px !important;
flex: auto;
justify-content: center !important;
text-align: center;
align-items: center;
box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.01);
background: #02BABC !important;
font-size: 0.5em !important;
padding: 0 2em !important;

@media screen and (max-width: 800px){
justify-content: flex-start !important;
text-align: left;
}


:nth-of-type(1), :nth-of-type(4){
background: #016E6E !important;
}

}



`;
export const StyledWrapper = styled.main`

min-height: 100vh;
width: 100vw;
margin-top: 80px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

h1{
font-weight: 300;
width: 90%;
max-width: 800px;
margin-bottom: 0.3em;


i{
margin-left: 5px;
font-size: 0.9em;
}
}

a{
font-weight: 700;
color: black;

}
p{
width: 90%;
max-width: 800px;
margin: 2em 0;
margin-top: 0;
}

ul{
width: 90%;
padding: 0;
max-width: 800px;
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;


li{

flex: auto;
display: flex;
justify-content: flex-start;
align-items: center;
margin: 0.3em 0.3em;
background: #131313;
color: white;
font-size: 0.8em;
height: 50px;
font-weight: 600;
padding: 0.5em;

border-radius: 5px;

span{
color: #131313;
background: white;
width: 25px !important;
height: 25px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 1em;
}
}
}

img{
margin-bottom: 1em;
width: 90%;
height: auto;
max-width: 800px;
border-radius: 10px;
box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.01);



}

`;

