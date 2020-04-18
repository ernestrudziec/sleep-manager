import React, {useState} from 'react';
import StyledNav from "./styled-components/StyledNav";
import StyledLogo from "./styled-components/StyledLogo";
import logo from '../../assets/logo/logo.svg';
import NavLinkList from "./components/NavLinkList";
import {Link} from "react-router-dom";
import StyledHamburger
    from "./styled-components/StyledHamburger";

const Navigation = () => {

    let handleClick = e => {
        e.preventDefault();
        console.log('button clicked!');

        if (isMenuOpened){
            setMenuOpened(false);
        }

    };


    let [isMenuOpened, setMenuOpened] = useState( false);

    return (
       <StyledNav>
           <Link to='/'><StyledLogo src={logo}/></Link>
           <NavLinkList isClicked={handleClick} opened={isMenuOpened}/>

           <StyledHamburger opened={isMenuOpened} onClick={() => {
               setMenuOpened(!isMenuOpened);
           console.log(isMenuOpened);}
           }>
               <i className="fas fa-bars"></i>
               <i className="fas fa-times"></i>
           </StyledHamburger>
       </StyledNav>
    );
};

export default Navigation;