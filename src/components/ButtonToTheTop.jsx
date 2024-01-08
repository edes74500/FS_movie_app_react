import React, { useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const StyledToTheTopDiv = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 70px;
  height: 70px;
  display: flex;
  opacity: 0;
  /* border: 6px solid white; */
  background-color: rgb(var(--secondary-color));
  z-index: 10;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.3s linear;
  pointer-events: none;
  svg {
    font-size: 3rem;
    color: white;
    pointer-events: none;
    /* margin: auto; */
  }
  &.is-visible {
    opacity: 1;
    pointer-events: all;
    cursor: pointer;
  }
`;
const ButtonToTheTop = () => {
  const [isScrolled, setisScrolled] = React.useState(false);

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    window.scrollY > 400 ? setisScrolled(true) : setisScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledToTheTopDiv className={isScrolled ? "is-visible" : ""} onClick={handleOnClick}>
      <FaArrowUp />
    </StyledToTheTopDiv>
  );
};

export default ButtonToTheTop;
