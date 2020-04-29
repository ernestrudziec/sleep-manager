import React, {useEffect} from 'react';


import styled from 'styled-components';

const StyledContactPage = styled.section`
min-height: 100vh;
width: 100%;
padding-top: 100px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0 1em;
text-align: center;

`;

const StyledContactForm = styled.form`
width: 90%;
max-width: 400px;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;


label{
margin-top: 1em;


}

input, textarea{
width: 100%;
background: white;
border: solid 2px #131313;
font-size: 1em;
padding: 1em;
margin-top: 0.5em;
border-radius: 3px;
}

input{
height: 40px;

}

textarea{
height: 120px;

}

button{
width: 100%;
height: 40px;
margin-top: 3em;
background: #131313;
color: white;
font-size: 1em;
border-radius: 5px;
}

`;



const ContactPage = ({hideMenu}) => {

    useEffect(() => { hideMenu() }, []);


    return (
        <StyledContactPage>
            <h1>Skontaktuj się z nami i <u>zamów</u> już teraz!</h1>


            <StyledContactForm>

                <label>Imię i nazwisko</label>
                <input/>
                <label>Temat</label>
                    <input/>
                <label>Treść</label>
                        <textarea/>


                        <button>Wyślij</button>
            </StyledContactForm>



        </StyledContactPage>
    );
};

export default ContactPage;