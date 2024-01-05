import React from "react";
import styled from "styled-components";
import { TbCategoryPlus } from "react-icons/tb";

const StyledFilterModule = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* gap: 10px; */
  align-items: center;
  justify-content: center;
`;
const StyledContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;
  border-radius: 5px;
  width: fit-content;
  overflow: hidden;
  /* gap: 10px; */
  background-color: #ffffff14;
  /* border-radius: 0; */
  h3 {
    display: flex;
    cursor: pointer;
    align-items: center;
    background-color: rgba(var(--secondary-color), 0.8);
    /* backdrop-filter: opacity(20%); */
    padding: 10px;
    color: black;
    font-size: 1rem;
    font-family: roboto;
    /* color: var(--secondary-color); */
    svg {
      margin: 4px;
      font-size: 1rem;
    }
  }
  overflow: hidden;

  /* .is-hidden {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease-in-out;
  } */
`;

const CategoriesIcones = () => {
  function Category(name, id) {
    this.name = name;
    this.id = id;
  }

  const Categories = [new Category("action", 1), new Category("family", 2)];

  const StyledIconsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    transition: 1s;
    min-height: 0;
    padding: 10px;
    &.is-hidden {
      padding: 0px;
      grid-template-rows: 0fr;
      transform: translateY(100%) scale(0);
    }

    img {
      height: 70px;
      filter: invert(100%) saturate(0) brightness(300);
    }

    .icons-container {
      min-height: 0;
      opacity: 1;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      /* padding: 10px; */
      .icon-container {
        text-transform: capitalize;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
        img {
          height: 50px;
          filter: invert(100%) saturate(0) brightness(300);
          cursor: pointer;
        }
        h4 {
          font-size: 0.7rem;
        }
      }
    }
  `;

  const handleOnClick = (e) => {
    document.querySelector(".icons-wrapper").classList.toggle("is-hidden");
    console.log(e);
  };

  return (
    <StyledContainerDiv>
      <div onClick={handleOnClick}>
        <h3>
          {" "}
          <TbCategoryPlus />
          Envie d'un style en particuler ?
        </h3>
      </div>

      <StyledIconsContainer className="icons-wrapper">
        <div className="icons-container">
          {Categories.map((category) => {
            return (
              <div key={category.id} className="icon-container">
                <img src={`./img/fav/${category.name}.png`} alt="" /> <h4>{category.name}</h4>
              </div>
            );
          })}
        </div>
      </StyledIconsContainer>
    </StyledContainerDiv>
  );
};

const FilerModule = () => {
  return (
    <StyledFilterModule>
      <CategoriesIcones />
    </StyledFilterModule>
  );
};

export default FilerModule;
