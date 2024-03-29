import React from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import FavoriteIcone from "./FavoriteIcone";

// Composant stylisé pour la barre de navigation
const StyledNavbar = styled.nav`
  background: var(--nav-bar-color);
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  /* max-width: 1300px; */
  /* margin: auto; */

  /* position: relative; */
  /* padding: 20px 0; */
  /* width: 100vw; */
  /* @media screen and (max-width: ${breakpoints.desktop}px) {
    width: 80vw;
  } */
  .navbar-wrapper {
    min-height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
    height: 100%;
    align-items: center;
    justify-content: center;
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 50px;
      width: 100%;
      font-weight: 100;
      /* justify-content: space-between; */
    }
  }
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  /* &::before {
      content: "";
      display: block;
      width: 0%;
      bottom: -10px;
      height: 2px;
      bottom: -15px;
      background: white;
      margin: 10px 0;
      position: absolute;
      transition: 1s; */
  /* } */
  &.active {
    color: #ff5200; /* Couleur du lien actif */
    font-weight: bold; /* Rendre le texte du lien actif plus gras */
    transition: 0.3s ease-in-out;
    /* &::before {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          bottom: -10px;
          bottom: -15px;
          background: #4caf50;
          margin: 10px 0;
          position: absolute;
        } */
  }
`;
// const StyledIcon = styled(NavLink)`
//   /* transition: 1s; */
//   /* transform: scale(1); */
//   right: 0;
//   svg {
//     transition: 1s;
//     text-decoration: none;
//     font-weight: bold;
//     top: 50%;
//     font-size: 35px;
//     color: lightgray;
//     transform: scale(1);
//   }
//   &.active svg {
//     color: red;
//     /* transition: 1s; */
//     /* transform: scale(5); */
//     animation: pulse 2s ease-in infinite;
//   }
//   @keyframes pulse {
//     0% {
//       transform: scale(1);
//     }
//     50% {
//       transform: scale(1.2);
//     }
//     100% {
//       transform: scale(1);
//     }
//   }
// `;

const StyledLogoContainer = styled.div`
  img {
    margin: 10px;
    width: 60px;
    /* height: 100px; */
  }
`;

const StyledLeftDiv = styled.div`
  display: flex;
`;

function Logo() {
  return (
    <StyledLogoContainer>
      <img src="./img/logos/logo4.png" alt="" />
    </StyledLogoContainer>
  );
}

function NavBarSecond() {
  // Logique de votre composant Navbar...\

  return (
    <StyledNavbar data-identifier="NavBar">
      <div className="navbar-wrapper">
        <ul>
          <li>
            <StyledLink to="/" className={(nav) => (nav.isActive ? "active" : "")}></StyledLink>
          </li>
        </ul>
        <StyledLeftDiv>
          <ul>
            <li>
              <NavLink to="/favorite" className={(nav) => (nav.isActive ? "active" : "")}>
                <FavoriteIcone />
              </NavLink>
            </li>
            {/* autres liens */}
          </ul>
        </StyledLeftDiv>
      </div>
    </StyledNavbar>
  );
}

export default NavBarSecond;
