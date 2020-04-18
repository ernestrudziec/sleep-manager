import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`

height: auto;
width: 100vw;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: flex-start;
margin: 0;
padding: 0;
margin-bottom: 5em;


div{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 25%;
background: white;
color: white;
padding: 3em 1.5em;
border-left: 10px solid #02BABC;
border-radius: 10px;
height: 400px;
box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.01);
color: #131313;
text-align: center;
margin: 0;

:nth-child(2){
i{
color: #5FE2E1;
}

border-left: solid 10px #5FE2E1;
}






i{
font-size: 5em;
margin-bottom: 0.2em;
color: #02BABC;
}
p{
margin: 0;
padding: 0;
font-size: 1em;

b{
font-weight: 800;
}
}


}

@media screen and (max-width: 1200px){
align-items: center;
flex-direction: column;
padding: 3em 0;
div{
width: 70%;
margin: 1em 0;
height: auto;
text-align: left;

i{
font-size: 4em;
margin-bottom: 0.5em;
}

p{

}
}

}
`;

export default StyledSection;