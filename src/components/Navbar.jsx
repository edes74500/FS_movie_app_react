import React from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import styled from "styled-components";

// Composant stylisé pour la barre de navigation
const StyledNavbar = styled.nav`
  /* background: #ff0000; */
  color: white;
  max-width: 1000px;
  margin: auto;
  padding: 20px 0;
  width: 100vw;
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  // autres styles...
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  position: relative;
  font-weight: bold;
  &::before {
    content: "";
    display: block;
    width: 0%;
    bottom: -10px;
    height: 2px;
    bottom: -15px;
    background: white;
    margin: 10px 0;
    position: absolute;
    transition: 1s;
  }
  &.active {
    color: #4caf50;
    transition: 1s ease-in-out;
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      bottom: -10px;
      bottom: -15px;
      background: #4caf50;
      margin: 10px 0;
      position: absolute;
    }
  }
`;
const StyledIcon = styled(NavLink)`
  /* transition: 1s; */
  /* transform: scale(1); */
  svg {
    transition: 1s;
    text-decoration: none;
    font-weight: bold;
    top: 50%;
    font-size: 30px;
    color: lightgray;
    transform: scale(1);
  }
  &.active svg {
    color: red;
    /* transition: 1s; */
    /* transform: scale(5); */
    animation: pulse 2s ease-in infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

function Navbar() {
  // Logique de votre composant Navbar...\

  return (
    <StyledNavbar>
      <ul>
        <li>
          <StyledLink to="/" className={(nav) => (nav.isActive ? "active" : "")}>
            Accueil
          </StyledLink>
        </li>

        <li>
          <StyledIcon to="/favorite" className={(nav) => (nav.isActive ? "active" : "")}>
            <FaHeart />
          </StyledIcon>
        </li>
        {/* autres liens */}
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;

// {
/* <li>
          <NavbarIcon to="/favorite">
            <FaHeart />
          </NavbarIcon>
        </li> */
// }

// function NavbarIcon({ children, to, ...props }) {
//   // Déterminez si le chemin est actif
//   let resolved = useResolvedPath(to);
//   let match = useMatch({ path: resolved.pathname, end: true });

//   return (
//     <StyledIcon to={to} className={`${match ? "active" : ""} ${scroll ? "scroll" : ""}`} {...props}>
//       {""}
//       {children}
//     </StyledIcon>
//   );
// }
