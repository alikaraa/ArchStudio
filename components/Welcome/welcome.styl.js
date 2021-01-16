import colors from "../../colors";

export const headerText = {
  display: "none",
  "@media(min-width:768px)": {
    display: "block",
  },
};

export const subHeaderText = {
  marginTop: 0,
  maxWidth: "446px",
};

export const welcomeContainer = {
  margin: "75px 32px",
  position: "relative",
  "&::before": {
    content: '""',
    borderTop: `1px solid ${colors.lightGrey}`,
    display: "block",
    marginBottom: "67px",
    width: "20%",
    "@media(min-width:768px)": {
      display: "none",
    },
  },
  "@media(min-width:768px)": {
    margin: "75px 0",
  },
};

export const body = {
  "@media(min-width:1150px)": {
    width: "446px",
    marginLeft: "185px",
  },
  "@media(max-width:1330px)": {
    marginLeft: 0,
  },
};

export const image = {
  display: "none",
  "@media(min-width:1150px)": {
    display: "block",
    position: "absolute",
    top: 120,
    right: 0,
    zIndex: -1,
  },
};
