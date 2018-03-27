import Typography from 'typography';
import 'typeface-roboto';

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Roboto"
  ],
  bodyFontFamily: ["Roboto"],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;