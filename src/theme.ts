import preset, { Theme } from '@rebass/preset';
import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}

const BASE_THEME = preset as Theme;

const theme: Theme = {
  ...BASE_THEME,
  colors: {
    background: '#eeeeee',//most of the background not already a shape
    muted: '#fcbf1e',//tiny triangle at top and smaller shapes throughout
    gray: '#ddd',//honestly not sure
    text: '#111111',

    primary: '#120136',//title text, top right triangle
    secondary: '#035aa6',//top left triangle and left accent shapes
    highlight: '#202085',//fills bar as an animation on projects - very slight
  },
  queries: {
    xs: '@media screen and (max-width: 40em)',
    sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
    md: '@media screen and (min-width: 52em) and (max-width: 64em)',
    lg: '@media screen and (min-width: 64em)',
  },
  buttons: {
    empty: {
      p: 0,
      border: 0,
      m: 0,
      background: 'transparent',
    },
  },
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

export default theme;
