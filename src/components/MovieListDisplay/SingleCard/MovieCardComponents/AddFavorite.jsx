import styled from "styled-components";
import { FaHeart } from "react-icons/fa6";
import breakpoints from "../../../../styles/breakpoints";

const StyledAddFavorite = styled.div`
  svg {
    font-size: 3rem;
    color: #d3d3d35e;
    cursor: pointer;
    &:hover {
      color: white;
    }
    @media screen and (max-width: ${breakpoints.tablet}px) {
      font-size: 2rem;
    }
  }
`;

const AddFavorite = ({ movie }) => {
  return (
    <StyledAddFavorite>
      <FaHeart />
    </StyledAddFavorite>
  );
};

export default AddFavorite;
