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
    }
  }
  h3 {
    margin-top: 50px;
  }
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
