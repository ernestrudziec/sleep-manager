
import styled from 'styled-components';

const StyledMain = styled.main`



video{

min-height: 100vh;
width: 100vw;
position: absolute;
opacity: 0.2;

z-index: -1;




}

div{
position: absolute;
bottom: 5em;
font-size: 2em;

b{
font-family: Manrope, sans-serif;
margin-left: 10px;
font-weight: 300;
}
}
position: relative;
width: 100vw;
min-height: 100vh;
padding: 0;
padding-top: 80px;
margin: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;




}
header{
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
width: 80vw;
color: black;
flex-direction: column;
text-align: center;
margin: 0;
padding: 0;



h1{
font-size: 3em;
margin: 0;

}

h2{
font-size: 1.5em;
margin: 0;
font-weight: 100;
text-transform: lowercase;
}


}

@media screen and (max-width: 800px){

div{

bottom: 2em;
}
video{
display: none;
}


header{
h1{
font-size: 3em;
line-height: 1;
margin-bottom: 1em;
}

h2{
font-size: 1.3em;
margin-bottom: 1em;
}
}
}


`;

export default StyledMain;