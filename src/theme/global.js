import { createGlobalStyle } from 'styled-components';
import fontBook from '../fonts';

const fontFaces = Object.keys(fontBook)
  .filter(name => fontBook[name])
  .map(name =>
    fontBook[name]
      .map(
        font => `
      @font-face {
        font-family: '${name}';
        src: url('${font.src}');
      }
    `
      )
      .join('')
  )
  .join('');

export default createGlobalStyle`
    ${fontFaces};
    * {
      margin: 0px;
      box-sizing: border-box;
    }
    #root {
      height: 100%;
      display: flex;
    }
    body, html {
      height: 100%;
      width: 100%;
    }
    div {
      max-width: 100%;
      display: flex;
    }
    a, p, h1, h2, h3, ul, li {
      -webkit-font-smoothing: antialiased;
      max-width: 100%;
    }
    p {
      font-family: ${p => p.theme.font.MerriweatherRegular};
    }
`;
