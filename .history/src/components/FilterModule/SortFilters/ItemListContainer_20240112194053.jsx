import React from "react";
import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

const StyledItemListContainer = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  &.is-selected {
    display: flex;
    position: relative;
    background-color: var(--filter-selected-color);
    .remove-icon {
      height: 100%;
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 10px;
      svg {
        height: 100%;
        width: 100%;
      }
    }
  }
  &:hover {
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: #2566cf65;
      left: 0;
    }
    img {
      transform: scale(1.1);
    }
    h4 {
      transform: scale(1.1);
    }
  }
  h4 {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    /* &:hover {
          opacity: 1;
        } */
  }
  img {
    padding-right: 15px;
    /* height: 20px; */
    cursor: pointer;
  }
  .remove-icon {
    display: none;
  }
`;
const ItemListContainer = ({ children }) => {
  return <StyledItemListContainer>{children}</StyledItemListContainer>;
};

export default ItemListContainer;
