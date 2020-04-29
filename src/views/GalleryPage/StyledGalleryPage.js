import React from 'react';
import styled from 'styled-components';

const StyledGalleryPage = styled.section`


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 100px;
min-height: 90vh;

h1{
font-size: 2em;
}


div{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 98vw;

img{
width: 80%;
border-radius: 10px;
margin: 1em;
object-fit: cover;
height: 300px;
}
}

@media screen and (min-width: 1200px){

div{
flex-direction: row;
flex-wrap: wrap;

img{
width: 45%;
object-fit: cover;
object-position: center;

height: 600px;
}
}


}
`;

export default StyledGalleryPage;