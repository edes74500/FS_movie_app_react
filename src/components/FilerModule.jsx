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
  gap: 10px;
  background-color: #ffffff14;
  /* border-radius: 0; */
  h3 {
    display: flex;
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
`;

const CategoriesIcones = () => {
  function Category(name, id) {
    this.name = name;
    this.id = id;
  }

  const Categories = [new Category("action", 1), new Category("family", 2)];

  const StyledIconsContainer = styled.div`
    img {
      height: 70px;
      filter: invert(100%) saturate(0) brightness(300);
    }
    .icons-container {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      padding: 10px;
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

  return (
    <StyledContainerDiv>
      <StyledIconsContainer>
        <h3>
          {" "}
          <TbCategoryPlus />
          Envie d'un style en particuler ?
        </h3>

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
