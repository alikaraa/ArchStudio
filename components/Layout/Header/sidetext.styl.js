import colors from "../../../colors";

export const sideText = {
  transform: "rotate(-270deg)",
  transformOrigin: "top left",
  position: "absolute",
  textTransform: "uppercase",
  color: colors.lightGrey,
  letterSpacing: "15px",
  fontSize: "15px",
  top: 0,
  "&::before": {
    content: "'----'",
    textDecoration: "line-through",
    paddingRight: "48px",
  },
  display: "none",
  "@media (min-width: 768px)": {
    left: "50px",
    display: "block",
  },
  "@media (min-width: 1100px)": {
    left: "100px",
  },
};
