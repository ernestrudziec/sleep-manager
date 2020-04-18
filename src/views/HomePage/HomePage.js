import React from 'react';
import StyledMain from "./styled-components/StyledMain";
import myVideo from '../../assets/videos/vid1.mp4';
import StyledSection
    from "./styled-components/StyledSection";
import CountUp from "react-countup";
import StyledInfos from "./styled-components/StyledInfos";


const HomePage = () => {

    return (
        <>
        <StyledMain>

            <video autoPlay muted loop>
                <source src={myVideo} type='video/mp4' />
            </video>

        <header>


            <h1>Sleep Manager  </h1>
            <h2>IDEALNE ROZWIĄZANIE DLA OSÓB, KTÓRE MAJĄ PROBLEMY ZE SNEM


            </h2>
        </header>


        </StyledMain>

        <StyledSection>

            <div>
                <i className="fas fa-bed"></i>
            <p>

                Oferowany przez nas produkt jest nie jedynie eleganckim dodatkiem do sypialni, ale przede wszystkim urządzeniem, które zadba o jakość naszego snu.

            </p>
            </div>

            <div>
                <i className="fab fa-algolia"></i>
            <p>
                Ty też nie lubisz kiedy z pięknego snu wyrywa cię drastyczny dźwięk budzika?
                Nasz produkt zadba o stopniowe wybudzanie ze snu, dzięki czemu obudzisz się w najpłytszej jego fazie.

            </p>
            </div>


            <div>
                <i className="fas fa-battery-full"></i>
            <p>

                Sposób w jaki się budzimy ma faktyczny wpływ nie tylko na nasz nastrój, ale też efektywność w ciągu dnia.
            </p>
            </div>

        </StyledSection>

            <StyledInfos>
                <div>  <i className="fas fa-globe-americas"></i>

                </div>

                <div> <i className="fas fa-flag"></i>

                </div>


            </StyledInfos>
        </>
    );

};

export default HomePage;