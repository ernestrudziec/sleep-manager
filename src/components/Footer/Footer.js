import React from 'react';
import StyledFooter from "./StyledFooter";
import whitelogo from '../../assets/logo/white_logo.svg';
const Footer = () => {
    return (
        <StyledFooter>
        <img src={whitelogo} />
        <div> Sleep Manager 2020 &copy; All rights reserved </div>
        </StyledFooter>
    );
};

export default Footer;