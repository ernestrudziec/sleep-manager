
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

position: relative;

:before{
content: '';
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
background: url("https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat;
background-size: cover;
background-position: center;
z-index: -2;

}


:after{
content: '';
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
background: linear-gradient(-180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,1) 90%);
z-index: -1;

}

div{

bottom: 2em;
}
video{
display: none;
overflow: hidden;
}


header{
color: #131313;
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