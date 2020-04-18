import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`

display: flex;
justify-content: center;
align-items: center;

min-height: 20vh;
background: #131313;
color: white;


div{
margin-left: 3em;
opacity: 0.3;
}

img{
height: 3em;
opacity: 0.3;
}

@media screen and (max-width: 800px){
font-size: 0.8em;
flex-direction: column;


div{
margin: 0;
margin-top: 1em;
}
}
`;

export default StyledFooter;