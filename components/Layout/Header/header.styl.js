import colors from "../../../colors";

export const navigation = {
  alignItems: "center",
  background: "white",
  display: "flex",
  paddingBottom: "56px",
  paddingTop: "56px",
  position: "relative",
  zIndex: 1000,
  "@media (max-width: 426px)": {
    padding: "32px",
    justifyContent: "space-between",
    position: "relative",
  },
};
export const logo = {
  paddingRight: "10%",
};

export const navItems = {
  display: "flex",
  justifyContent: "space-between",
  minWidth: "350px",
  "@media (max-width: 426px)": {
    display: "none",
  },
};

export const linkActiveStyles = {
  color: colors.darkBlue,
  position: "relative",
  "&::after": {
    borderBottom: `1px solid ${colors.darkBlue}`,
    content: '" "',
    display: "block",
    margin: "0 auto",
    paddingTop: "7px",
    position: "absolute",
    width: "50%",
    left: "50%",
    transform: "translateX(-50%)",
  },
};

export const navItemsMobile = {
  alignItems: "flex-start",
  backgroundColor: colors.veryLightGrey,
  display: "flex",
  flexDirection: "column",
  height: "235px",
  justifyContent: "space-evenly",
  paddingLeft: "48px",
  position: "absolute",
  right: 0,
  top: "108px",
  width: "343px",
  zIndex: 1000,
  "@media (min-width: 426px)": {
    display: "none",
  },
};

export const navItemMobile = {
  color: colors.darkBlue,
};

export const overlay = {
  position: "fixed",
  backgroundColor: "black",
  opacity: 0.5,
  left: 0,
  bottom: 0,
  top: 0,
  right: 0,
  zIndex: 10,
  "@media (min-width: 426px)": {
    display: "none",
  },
};
