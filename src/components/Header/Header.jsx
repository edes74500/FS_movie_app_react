// import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import React, { useEffect, useRef } from "react";
import ButtonToTheTop from "../Shared/ButtonToTheTop";
import customBreakpoints from "../../styles/customBreakpoints";
import SearchBar from "./SearchBar";

const StyledHeader = styled.div`
  position: relative;
  /* min-height: 400px; */
  margin-bottom: 50px;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(2, 16, 27);
    background: linear-gradient(0deg, rgb(var(--main-color)) 0%, rgba(0, 0, 0, 0) 20%);
    background: linear-gradient(0deg, rgb(var(--main-color)) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 84%, rgb(var(--main-color)) 100%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    pointer-events: none;
  }

  .logo-search-container {
    bottom: 0;
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    .logo-container {
      position: absolute;
      /* transform: translate(-140%, -45%); */
      left: 20px;
      bottom: 50px;
      ${customBreakpoints.lessThan("desktop")`
    bottom: 100px;
  `}
      text-shadow: 1px 1px 1px #e65608d5;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px 1px 8px rgba(var(--secondary-color), 0.9);
      z-index: 2;
      h2 {
        font-family: "Feed";
        font-size: 3.5rem;
        ${customBreakpoints.lessThan("tablet")`
       font-size: 2.5rem;
  `}

        h3 {
          font-size: 1.5rem;
          ${customBreakpoints.lessThan("tablet")`
     font-size: 1rem;
  `}
        }
      }
    }
  }
`;

const StyledSwiperSlideDiv = styled.div`
  min-height: 400px;
  background-position: center center;
  background-size: cover;
  /* z-index: 15; */
  animation: scale 30s linear alternate-reverse infinite;
  cursor: grab;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(2, 16, 27);
    background: linear-gradient(0deg, rgb(var(--main-color)) 0%, rgba(0, 0, 0, 0) 20%);
    background: linear-gradient(90deg, rgb(var(--main-color)) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgb(var(--main-color)) 100%);
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
      /* transform: scale(1); */
    }
  }
`;

const Header = ({ setInputSearchValue }) => {
  const carrousselImages = Array(9)
    .fill()
    .map((_, index) => index);

  return (
    <>
      <StyledHeader data-identifier="Header">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          navigation={true}
          spaceBetween={0}
          loop={true}
          speed={1000}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {carrousselImages.map((index) => (
            <SwiperSlide key={index} style={{ backgroundImage: `url(./img/banners/banner${index}.png)` }}>
              <StyledSwiperSlideDiv style={{ backgroundImage: `url(./img/banners/banner${index}.png)` }} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="logo-search-container">
          <div className="logo-container">
            <h2>CINE ADDICT</h2>
            <h3>Trouve ton prochain film !</h3>
          </div>
          {/* <SearchInput setInputSearchValue={setInputSearchValue} /> */}
          <SearchBar setInputSearchValue={setInputSearchValue} />
        </div>
        <ButtonToTheTop />
      </StyledHeader>
    </>
  );
};

export default Header;
