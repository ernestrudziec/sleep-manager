import React from 'react';
import styled from 'styled-components';

const StyledInfos = styled.section`

height: auto;
display: flex;
justify-content: space-evenly;
align-items: flex-start;


div{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

i{
font-size: 5em;
background-color: #016E6E;
color: white;
border-radius: 50%;
padding: 0.5em;
margin-bottom: 0.5em;
}



}
}




span{
font-size: 2em;
font-weight: 900;
color: #02BABC;
margin: 0;
padding: 0;
}

p{
margin: 0;
padding: 0;
}

@media screen and (max-width: 1200px){
flex-direction: column;
align-items: center;

div{
margin-top: 5em;
width: 80vw;
text-align: center;
}

}
`;

export default StyledInfos;