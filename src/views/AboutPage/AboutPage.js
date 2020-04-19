import React, {useEffect} from 'react';
import { StyledWrapper, StyledUl}
    from "./styled-components/StyledWrapper";
import {Link} from "react-router-dom";
import project from '../../assets/project.png';
import project2 from '../../assets/project2.png';


const AboutPage = ({hideMenu, isOpened}) => {

    useEffect(() => { hideMenu() }, []);

    return (
        <StyledWrapper>
            <h1>Czym jest <b>Sleep manager</b> <i
                className="fas fa-question-circle"></i>
            </h1>
            <p>

                Jest to <b>bezprzewodowa lampka nocna służąca jako budzik,</b> posiadająca wyświetlacz oraz wbudowaną aplikację. Można ją również połączyć z <Link to='/app'>aplikacją mobilną.</Link>


                Posiada wiele prostych, ale poprawiających komfort życia funkcji.

            </p>

            <img src='https://lh4.googleusercontent.com/gMKmlYMSSQiU8exdfJM9o7ziVMEqZxK_a2LPenErCDlz4Ct0uWjI38OutBPWJPDI3yFBlBK0YKNvUdShcdWGfuUmDJm_QFVH2OcJX4B_' />

            <h1>Jakie ma <b>funkcjonalności?</b>                <i className="fas fa-clipboard-check">  </i>


                <StyledUl>
                    <li>Funkcja usypiania</li>
                    <li>Wyświetla aktualną pogodę oraz godzinę</li>
                    <li>Jest źródłem światła, jak zwykła lampka nocna</li>
                    <li>Ma wbudowany budzik</li>
                    <li>Przypomina o ładowaniu</li>
                </StyledUl>


            </h1>

            <h1>Budowa <b>produktu</b>
                <i className="fas fa-project-diagram"></i>
            </h1>

            <ul>
                <li>1. Dotykowy wyświetlacz</li>
                <li>2. Powierzchnia podświetlana</li>
                <li>3. Gniazdo zasilania</li>
                <li>4. Drewniana podstawka</li>
            </ul>

            <img src={project} />

            <p>
            </p>

            <h1>Wymiary <b>sleep managera</b>
                <i className="fas fa-arrows-alt"></i>
            </h1>

            <img src={project2} />
        </StyledWrapper>
    );
};

export default AboutPage;