import React from 'react';
import StyledNav from "./styled-components/StyledNav";
import StyledLogo from "./styled-components/StyledLogo";
import logo from '../../assets/logo/logo.svg';
import NavLinkList from "./components/NavLinkList";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
       <StyledNav>
           <Link to='/'><StyledLogo src={logo}/></Link>
           <NavLinkList/>
       </StyledNav>
    );
};

export default Navigation;