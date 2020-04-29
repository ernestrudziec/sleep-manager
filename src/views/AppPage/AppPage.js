import React, {useEffect} from 'react';

import bg2 from '../../assets/img8.jpg';

import styled from 'styled-components';

const StyledAppPage = styled.section`

position: relative;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
width: 100%;
flex-direction: column;
padding: 0 1em;
text-align: center;
padding-top: 100px;


:before{
position: absolute;
content: '';
top: 0;
bottom: 0;
left: 0;
right: 0;

z-index: -2;
background: url(${bg2}) center no-repeat;
background-size: cover;

}

:after{
position: absolute;
content: '';
top: 0;
bottom: 0;
left: 0;
right: 0;

z-index: -1;
background: white;
background-size: cover;
opacity: 0.8;

}





`;

const StyledDownloadButtons = styled.div`
display: flex;
justify-content: center;
align-items: center;



div{
margin: 0 1em;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.9em;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
border-radius: 5px;
background: white;
padding: 1em;
width: 40%;
height: 50px;

i{
height: 1em;
width: 1em;
margin-left: 0.2em;
font-size: 2.1em;
}

:hover{
color: white;
background: #131313;
}
}

`;

const StyledAboutApp = styled.div`

display: flex;
justify-content: center;
align-items: center;

margin-top: 3em;
flex-wrap: wrap;
width: 90%;

@media screen and (max-width: 400px){
width: 100%;
}


div{

i{
margin-right: 1em;
font-size: 2.6em;
width: 1em;
}
margin: 1em;
background: #202020;
text-align: left;
color: white;
padding: 1em;
max-width: 500px;
flex: auto;
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 2em;

border-radius: 10px;
border-right:  solid 10px #02BABC;
border-left:  solid 10px #02BABC;


}
`;


const AppPage = ({hideMenu}) => {

    useEffect(() => { hideMenu() }, []);

    return (
        <StyledAppPage>
            <h1>Aplikacja dostępna na urządzenia mobilne</h1>
           <h2>Pobierz już teraz!</h2>

            <StyledDownloadButtons>
               <div>Appstore <i
                   className="fab fa-app-store-ios"></i></div><div>Google Play <i
               className="fab fa-google-play"></i></div>
           </StyledDownloadButtons>


            <StyledAboutApp>

                <div><i className="fab fa-bluetooth"></i> Łączy się z lampką za pomocą sygnału Bluetooth
                </div>
                <div>
                    <i className="fas fa-smog"></i> Po połączeniu z  internetem aktualizuje pogodę

                </div>

                <div><i className="fas fa-sliders-h"></i>Pozwala na personalizację ustawień
                </div>
            </StyledAboutApp>
        </StyledAppPage>
    );
};

export default AppPage;