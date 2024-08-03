const variablesStyles = '@import "./src/scss/common/_vars.scss"';
const breakpointsStyles = '@import "./src/scss/common/_breakpoints.scss"';
const mixinsStyles = '@import "./src/scss/common/_mixins.scss"';
const resetStyles = '@import "./src/scss/common/_reset.scss"';
const fontsStyles = '@import "./src/scss/common/_fonts.scss"';
const containerStyles = '@import "./src/scss/common/_container.scss"';

const styles = [
  variablesStyles,
  breakpointsStyles,
  //   colorsStyles,
  mixinsStyles,
  //   baseStyles,
  resetStyles,
  fontsStyles,
  containerStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
