// import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import breakpoints from "../../styles/breakpoints";
import SearchBar from "./SearchBar";
import SearchBarSecond from "./SearchBarSecond";

interface HeroSection {
  setInputSearchValue: (value: string) => void;
}

const StyledHeroSection2 = styled.div`
  position: relative;
  margin: auto;
  margin-top: 80px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;

  .logo-search-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    bottom: 0;
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    .logo-container {
      /* position: absolute; */
      /* transform: translate(-140%, -45%); */
      left: 20px;
      bottom: 50px;
      z-index: 1;
      text-shadow: 1px 1px 1px #e65608d5;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000,
        1px 1px 8px rgba(var(--secondary-color), 0.9);
      z-index: 2;
      @media screen and (max-width: ${breakpoints.desktop}px) {
        bottom: 100px;
      }
      @media screen and (max-width: ${breakpoints.tablet}px) {
        /* transform: translate(-50%, -200%);
        display: none;
        left: 50%;
        text-align: center;
        bottom: 10%; */
      }
      h2 {
        font-family: "Feed";
        text-shadow: 1px 1px 1px #e65608d5;
        text-shadow: 11px 11px 8px #000, 11px 11px 8px #000, 11px 11px 8px #000, 11px 11px 8px #000,
          11px 11px 8px rgba(var(--secondary-color), 0.9);
        z-index: 2;
        font-size: 3.5rem;
        @media screen and (max-width: ${breakpoints.desktop}px) {
          font-size: 2.5rem;
          color: white;
        }
        h3 {
          font-size: 1.5rem;
          @media screen and (max-width: ${breakpoints.desktop}px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
  .absolute-icon {
    position: absolute;
    height: 50vw;
    max-height: 600px;
    aspect-ratio: 1/1;
    bottom: 0px;
    left: 0px;
    /* z-index: ; */
    /* background-color: red; */
    background-image: url("./img/logos/logo7.png");
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.4;
    transform: rotate(-20deg) translate(-40%, 20%);
    @media screen and (max-width: ${breakpoints.desktop}px) {
      transform: rotate(-20deg) translate(-40%, 20%);
      font-size: 1rem;
      height: 70vw;
      width: 100%;
    }
    @media screen and (max-width: ${breakpoints.mobile}px) {
      /* transform: rotate(-20deg) translate(-20%, -40%); */
      transform: rotate(-20deg) translate(-50%, 30%);
      font-size: 1rem;
      height: 90vw;
      width: 100%;
    }
  }
`;

const StyledSwiperSlideDiv = styled.div`
  min-height: 200px;

  background-position: center center;
  background-size: cover;
  animation: scale 30s linear alternate-reverse infinite;
  cursor: grab;
  @media screen and (max-width: ${breakpoints.tablet}px) {
    /* min-height: 200px; */
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 1;
  }
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

const HeroSection2: React.FC<HeroSection> = () => {
  return (
    <StyledHeroSection2 data-identifier="HeroSection2">
      <div className="logo-search-container">
        <div className="logo-container">
          <h2>CINE ADDICT</h2>
          <h3>Trouve ton prochain film !</h3>
        </div>
        <SearchBarSecond />
      </div>
      <div className="absolute-icon"></div>
    </StyledHeroSection2>
  );
};

export default HeroSection2;
