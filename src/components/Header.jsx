// import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { IoSearch } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import ButtonToTheTop from "./ButtonToTheTop";

const StyledHeaderWrapper = styled.div`
  position: relative;
  .custom-swiper-button-prev,
  .swiper-button-next {
    z-index: 9999 !important;
    /* position: static; */
  }

  min-height: 400px;
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
`;

const StyledBannerImg = styled.div`
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
  /* .swiper-button-prev {
    z-index: 3;
  } */
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

const StyledTextContainer = styled.div`
  position: absolute;
  left: 10%;
  bottom: 40px;
  @media screen and (max-width: 750px) {
    bottom: 100px;
  }
  text-shadow: 1px 1px 1px #e65608d5;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px 1px 8px rgba(var(--secondary-color), 0.9);
  z-index: 2;
  h2 {
    font-family: "Feed";
    font-size: 3.5rem;
    @media screen and (max-width: 750px) {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
      @media screen and (max-width: 750px) {
        font-size: 1rem;
      }
    }
  }
`;

const StyledSearchDiv = styled.div`
  display: flex;
  height: 40px;
  outline: none;
  border-radius: 5px;
  width: fit-content;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border: 1px solid rgb(var(--main-color));
  &:focus-within {
  }
  input {
    border: none;
    outline: none;
    width: 400px;
    padding-left: 10px;
    @media screen and (max-width: 750px) {
      width: 250px;
    }
  }
  button {
    border: none;
    width: 50px;
    cursor: pointer;
    background: rgb(var(--secondary-color));
    svg {
      font-size: 20px;
    }
  }
`;

// let searchResults = "";
const SearchInput = ({ setInputSearchValue }) => {
  const timeoutRef = useRef(null);

  const handleOnChange = (e) => {
    const searchValue = e.target.value;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setInputSearchValue(searchValue);
    }, 800);
  };

  return (
    <StyledSearchDiv>
      <input type="text" placeholder="Rechercher..." onChange={handleOnChange} />
      <button>
        <span role="img" aria-label="Loupe">
          <IoSearch />
        </span>
      </button>
    </StyledSearchDiv>
  );
};

// const ToTheTopButton = () => {
//   const [scroll, setScroll] = React.useState();
//   useEffect(() => {
//     const handleOnScroll = () => {
//       setScroll(window.scrollY);
//       console.log("hey");
//     };
//     window.addEventListener("scroll", handleOnScroll);

//     return window.removeEventListener("scroll", handleOnScroll);
//   }, []);
//   return (
//     <StyledToTheTopDiv className={scroll > 0 ? "" : "is-visible"}>
//       <FaArrowUp />
//     </StyledToTheTopDiv>
//   );
// };

const Header = ({ setInputSearchValue }) => {
  const carrousselImages = Array(9)
    .fill()
    .map((_, index) => index);

  return (
    <>
      <StyledHeaderWrapper ouvert={false}>
        <StyledTextContainer>
          <h2>CINE ADDICT</h2>
          <h3>Trouve ton prochain film !</h3>
        </StyledTextContainer>
        <SearchInput setInputSearchValue={setInputSearchValue} />
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
            <SwiperSlide key={index}>
              <StyledBannerImg style={{ backgroundImage: `url(./img/banners/banner${index}.png)` }} />
            </SwiperSlide>
          ))}
        </Swiper>
        <ButtonToTheTop />
      </StyledHeaderWrapper>
    </>
  );
};

export default Header;
