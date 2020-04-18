
import styled from 'styled-components';

const StyledMain = styled.main`

video{

height: 80vh;
width: 100vw;
position: absolute;
opacity: 0.2;

z-index: -1;



}

width: 100vw;
min-height: 90vh;
padding-top: 80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

header{
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
width: 80vw;
color: black;
flex-direction: column;
text-align: center;


h1{
font-size: 5em;
margin: 0;
}

h2{
font-size: 2em;
margin: 0;
font-weight: 100;
text-transform: lowercase;
}

}


`;

export default StyledMain;