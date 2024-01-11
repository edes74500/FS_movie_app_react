// customBreakpoints.js
import { generateMedia } from "styled-media-query";

const breakpoints = {
  desktop: 1024,
  tablet: 768,
  mobile: 576,
};

// Use these raw numbers to create media queries with styled-media-query
const customBreakpoints = generateMedia({
  desktop: `${breakpoints.desktop}px`,
  tablet: `${breakpoints.tablet}px`,
  mobile: `${breakpoints.mobile}px`,
});

export { customBreakpoints, breakpoints };
