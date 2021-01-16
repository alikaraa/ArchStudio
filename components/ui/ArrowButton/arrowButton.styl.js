import colors from "../../../colors";

export const button = {
  height: "72px",
  backgroundColor: colors.darkBlue,
  color: "white",
  textDecoration: "none",
  fontSize: "15px",
  textTransform: "capitalize",
  display: "inline-flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px 32px",
  fontWeight: "bold",
  letterSpacing: ".04em",
  lineHeight: 0,

  "@media (min-width: 1024px)": {
    "&:hover": {
      backgroundColor: colors.darkGrey,
    },
  },

  "&:active": {
    backgroundColor: colors.lightGrey,
  },
};
