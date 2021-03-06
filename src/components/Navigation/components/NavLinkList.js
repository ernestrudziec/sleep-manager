import React from 'react';
import StyledNavLinkList
    from "../styled-components/StyledNavLinkList";
import { NavLink } from "react-router-dom";
import styles from '../styled-components/activeLink.module.scss';
import logo from '../../../assets/logo/logo.svg';

const NavLinkList = ({opened}) => {
    return (
        <StyledNavLinkList opened={opened}>


                <img src={logo}/>
                <NavLink exact activeClassName={styles.active} to="/about"><li >O produkcie</li></NavLink>
                <NavLink exact activeClassName={styles.active} to="/gallery"><li>Galeria</li></NavLink>
                <NavLink exact activeClassName={styles.active} to="/app"><li>Aplikacja</li></NavLink>
                <NavLink exact activeClassName={styles.active} to="/contact"><li>Kontakt</li></NavLink>

        </StyledNavLinkList>
    );
};

export default NavLinkList;