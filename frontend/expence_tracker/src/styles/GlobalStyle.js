import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  :root {
    --primary-color: #222260;
    --primary-color2: rgba(34, 34, 96, 0.6);
    --primary-color3: rgba(34, 34, 96, 0.4);
    --color-green: #42AD00;
    --color-grey: #aaa;
    --color-accent: #F56692;
    --color-delete: #FF0000;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    overflow: hidden;
    color: rgba(34, 34, 96, 0.6);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary-color);
  }

  h1 {
    font-size: 2em; /* Adjust font size for h1 */
  }

  h2 {
    font-size: 1.8em; /* Adjust font size for h2 */
  }

  h3 {
    font-size: 1.6em; /* Adjust font size for h3 */
  }

  p {
    margin-bottom: 1vw; /* Using 1vw as a relative value for margin */
  }

  .error {
    color: red;
    animation: shake 0.5s ease-in-out;

    @keyframes shake {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(1vw); /* Using 1vw as a relative value for translation */
      }
      50% {
        transform: translateX(-1vw); /* Using 1vw as a relative value for translation */
      }
      75% {
        transform: translateX(1vw); /* Using 1vw as a relative value for translation */
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;
