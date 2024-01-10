import React from "react";

import { TbFilterSearch } from "react-icons/tb";
import styled from "styled-components";

const StyledFilterModuleSearchButton = styled.div``;

const FilterModuleSearchButton = () => {
  return (
    <StyledFilterModuleSearchButton>
      <TbFilterSearch className="HandleMobileFilter" />
    </StyledFilterModuleSearchButton>
  );
};

export default FilterModuleSearchButton;
