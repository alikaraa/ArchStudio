import colors from "../../colors";

export const container = {
  position: "relative",
};

export const mainTextContainer = {
  maxWidth: "343px",
  position: "relative",
  "@media (min-width: 768px)": {
    maxWidth: "515px",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
};

export const subTextContainer = {
  backgroundColor: "white",
  paddingLeft: "32px",
  paddingTop: "32px",
  marginTop: "-32px",

  "@media (min-width: 768px)": {
    marginTop: "0px",
    paddingLeft: "59px",
    paddingTop: "160px",
    "&:before": {
      content: '""',
      borderTop: `1px solid ${colors.lightGrey}`,
      display: "block",
      marginBottom: "74px",
      width: "50px",
    },
  },
  "@media (min-width: 1024px)": {
    paddingTop: "156px",
    paddingLeft: "100px",
  },
};
