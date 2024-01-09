// customBreakpoints.js
import { generateMedia } from "styled-media-query";

const customBreakpoints = generateMedia({
  desktop: "992px",
  tablet: "768px",
  mobile: "576px",
});

export default customBreakpoints;
