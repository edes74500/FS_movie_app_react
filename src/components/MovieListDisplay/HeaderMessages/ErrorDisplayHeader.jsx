import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const StyledErrorDisplayHeader = styled.div`
  width: 100%;
  z-index: -1;
  .error-message {
    padding-bottom: 50px;
    text-align: center;
    h2 {
      font-size: 2rem;
    }
    span {
      font-size: 4rem;
      text-align: center;
      animation: fadein 1s 0.3s forwards;
      opacity: 0;
    }
  }
  h3 {
    margin-top: 50px;
    animation: fadein 1s 0.4s forwards;
    opacity: 0;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  overflow: hidden;
`;

const ErrorDisplayHeader = () => {
  const framerMotionAnimation = {
    hidden: { opacity: 0, y: -50, height: 0 },
    visible: {
      height: "auto",
      y: 0,

      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      y: -50,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <motion.div
        variants={framerMotionAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={489992}
        // transition={{ duration: 1 }}
      >
        <StyledErrorDisplayHeader className="error-display-header-style" data-identifier="ErrorDisplayHeader">
          <div className="error-message">
            <h2>Desole aucun film ne correspond a votre recherche </h2>
            <span>😥</span>
          </div>
          <h3>En attendant...</h3>
        </StyledErrorDisplayHeader>
      </motion.div>
      {/* </AnimatePresence> */}
    </>
  );
};

export default ErrorDisplayHeader;
