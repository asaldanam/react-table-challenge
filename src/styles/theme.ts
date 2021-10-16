const theme = {
  device: {
    mobile: `@media (max-width: 767px)`,
    tabletS: `@media (min-width: 768px)`,
    tabletL: `@media (min-width: 1024px)`,
    desktop: `@media (min-width: 1025px)`,
  },
  colors: {
    white: '#ffffff',
    primary: '#0099ff',
    danger: '#ec484d',
    greyLight: '#f5f8fa',
    greySoft: '#dfe6ea',
    greyMedium: '#c1ccd2',
    greyDark: '#536673',
    greyDarker: '#2b4150',
  },
};

export default theme;

export type CustomTheme = typeof theme;
