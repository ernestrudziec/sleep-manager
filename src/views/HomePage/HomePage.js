import React from 'react';
import StyledMain from "./styled-components/StyledMain";
import myVideo from '../../assets/videos/vid1.mp4';
import StyledSection
    from "./styled-components/StyledSection";
import CountUp from "react-countup";
import StyledInfos from "./styled-components/StyledInfos";
import ScrollAnimation from 'react-animate-on-scroll';

const HomePage = () => {

    return (
        <>
        <StyledMain>

            <video autoPlay muted loop>
                <source src={myVideo} type='video/mp4' />
            </video>

        <header>




                <h1> Sleep Manager </h1>



            <h2>IDEALNE ROZWIĄZANIE DLA OSÓB, KTÓRE MAJĄ PROBLEMY ZE SNEM


            </h2>


        </header>



            <div className="fas fa-arrow-down"><b>więcej</b></div>
        </StyledMain>
            <ScrollAnimation animateIn="fadeIn">
            <StyledInfos>

                <div>
                    <i className="fas fa-globe-americas"></i>
                    <span><CountUp end={3500} delay={1} duration={10}/> mln</span>
                    <p> ludzi na świecie cierpi na zaburzenia snu.</p>


                </div>


                <div> <i className="fas fa-flag"></i>
                    <span><CountUp end={25} delay={1}  duration={10}/> mln</span>
                    <p> Polaków ma problemy z zasypianiem</p>

                </div>


            </StyledInfos>
        </ScrollAnimation>


        <StyledSection>

            <ScrollAnimation animateIn="fadeInLeft" animateOnce>

                <i className="fas fa-bed"></i>
            <p>

                Oferowany przez nas produkt <b>nie jest jedynie eleganckim dodatkiem do sypialni, </b> ale przede wszystkim urządzeniem, które zadba o jakość naszego snu.

            </p>

            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <i className="fab fa-algolia"></i>
            <p>
                Ty też nie lubisz kiedy z pięknego snu wyrywa cię drastyczny dźwięk budzika?
                Nasz produkt zadba o stopniowe wybudzanie ze snu, <b>dzięki czemu obudzisz się w najpłytszej jego fazie.</b>

            </p>
            </ScrollAnimation>


            <ScrollAnimation animateIn="fadeInRight" animateOnce>
                <i className="fas fa-battery-full"></i>
            <p>

                Sposób w jaki się budzimy ma faktyczny wpływ nie tylko na nasz <b>nastrój</b>, ale też <b>efektywność</b> w ciągu dnia.
            </p>
            </ScrollAnimation>

        </StyledSection>


        </>
    );

};

export default HomePage;