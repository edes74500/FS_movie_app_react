import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css"; // Importez le fichier CSS de rc-slider
import Slider from "rc-slider";
import SortContainer from "./SortContainer";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { resetFilterListYears, updateFilterListYears } from "../../../actions/filterList.action";
// import { shownGenresFilm } from "../styles/globalStyles";

const StyledYearFiler = styled.div`
  .years-container {
    height: 40px;
    border-radius: 0 0 5px 5px;
    border-radius: 5px;
    margin: 1px 0;
    overflow: hidden;
    /* transition: background-color 1s ease-in-out; */
    /* background-color: red; */
    .year-start,
    .year-end {
      /* display: block; */
      position: absolute;
      top: 50%;
      color: var(--item-category-text-color);
      /* z-index: ; */
      font-size: 0.9rem;
      font-weight: 600;
      transform: translateY(100%);
    }
    .year-start {
      left: 5px;
    }
    .year-end {
      right: 5px;
    }
    .slider-wrapper {
      height: 100%;
      /* display: flex; */
      width: 100;
      background-color: inherit;

      .rc-slider {
        transition: 0s;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 60%;
        margin: 15px auto;
        .rc-slider-step {
          /* background-color: white; */
        }
        .rc-slider-rail {
          height: 8px;
          border: 1px solid var(--range-selected-color);
          /* background-color: rgb(var(--primary-color), 0.8); */
          /* background-color: white; */
        }
        .rc-slider-track {
          height: 10px;
          background-color: var(--range-selected-color);
        }
        .rc-slider-handle {
          margin: 0px;
          color: white;
          opacity: 1;
          height: 20px;
          width: 20px;
          border: 1px solid rgb(var(--primary-color), 0.8);
        }
        .rc-slider-handle-dragging {
          box-shadow: 0px 1px 8px 6px var(--range-selected-color);
          transform: scale(4);
        }
      }
      &.is-selected {
        display: flex;
        transition: background-color 0.5s ease-in-out;
        background-color: var(--filter-selected-color);
        .remove-icon {
          height: 100%;
          width: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 10px;
          /* svg {
          height: 100%;
          width: 100%;
        } */
        }
      }
    }
  }
`;
const YearFiler = () => {
  const [annees, setAnnees] = useState([1900, 2024]);
  const [userHasSelectedYears, setUserHasSelectedYears] = useState(false);

  //REDUX
  const dispatch = useDispatch();
  const dataYears = useSelector((state) => state.filtersList.years);

  const handleChange = (values) => {
    setUserHasSelectedYears(true);

    const start = values[0];
    const end = values[1];
    console.log(values);
    dispatch(updateFilterListYears(start, end));
  };

  const handleClick = () => {
    console.log(annees);
    setUserHasSelectedYears(true);

    // setUserHasSelectedYears(true);
  };

  const onClickReset = () => {
    setUserHasSelectedYears(false);
    dispatch(resetFilterListYears());
  };

  return (
    <SortContainer
      filterName="Annee"
      icon={userHasSelectedYears ? MdOutlineCancel : ""}
      onClick={onClickReset}
      onClickReset={onClickReset}
      userHasSelectedFilter={userHasSelectedYears}
    >
      <StyledYearFiler>
        <div className="years-container">
          <span className="year-start">{dataYears.start}</span> <span className="year-end">{dataYears.end}</span>
          <div className={`slider-wrapper ${userHasSelectedYears ? "is-selected" : ""}`} onMouseDown={handleClick}>
            <Slider
              range
              allowCross={false}
              startPoint={1990}
              min={1900}
              max={2024}
              // step={10}
              value={[dataYears.start, dataYears.end]}
              defaultValue={[dataYears.start, dataYears.end]}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* </div> */}
      </StyledYearFiler>
    </SortContainer>
  );
};

export default YearFiler;
