import { css } from "styled-components";

export const globalStyles = css`
  @font-face {
    font-family: "Feed";
    src: url("../assets/fonts/Interstellar.ttf") format("truetype");
  }

  :root {
    --main-color: #02101b; // Exemple de couleur principale
    --font-size: 16px; // Exemple de taille de police globale
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--main-color);
    color: white;
    font-family: "Lato", sans-serif;
  }
`;
