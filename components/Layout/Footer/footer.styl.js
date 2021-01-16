import colors from "../../../colors";

export const container = {
  alignItems: "center",
  background: `linear-gradient(to top, ${colors.veryLightGrey} 0%,${colors.veryLightGrey} 85%,${colors.veryLightGrey} 50%,white 50%,white 100%)`,
  display: "flex",
  flexDirection: "column",
  height: "443px",
  justifyContent: "space-between",
  marginTop: "72px",
  paddingBottom: "48px",
  "@media(min-width:768px)": {
    background: `linear-gradient(to right, ${colors.veryLightGrey} 0%,${colors.veryLightGrey} 80%,${colors.veryLightGrey} 50%,white 50%,white 100%)`,
    flexDirection: "row",
    height: "120px",
    marginTop: "200px",
    paddingBottom: 0,
  },
  "@media(min-width:1200px)": {
    background: `linear-gradient(to right, ${colors.veryLightGrey} 0%,${colors.veryLightGrey} 90%,${colors.veryLightGrey} 50%,white 50%,white 100%) no-repeat`,
    backgroundOrigin: "content-box",
    height: "200px",
    justifyContent: "flex-start",
    margin: "200px auto 0",
    maxWidth: "1440px",
    padding: "0 165px",
  },
};

export const linkContainer = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-evenly",
  "@media(min-width:768px)": {
    alignItems: "center",
    flexDirection: "row",
    flexGrow: 1,
  },
  "@media(min-width:1200px)": {
    justifyContent: "space-between",
    marginLeft: "5%",
    maxWidth: "316px",
  },
};
export const button = {
  "@media(min-width:1200px)": {
    marginLeft: "auto",
  },
};

export const logoContainer = {
  backgroundColor: colors.darkBlue,
  display: "flex",
  height: "120px",
  justifyContent: "center",
  width: "120px",
  "@media(min-width:1200px)": {
    height: "200px",
    width: "200px",
  },
};
