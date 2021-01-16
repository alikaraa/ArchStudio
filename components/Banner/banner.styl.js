import colors from "../../colors";

export const banner = {
  alignItems: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  height: "720px",
  position: "relative",
  width: "100%",
  "@media(max-width: 900px)": {
    display: "none",
  },
};

export const bannerOverlay = {
  "&:before": {
    backgroundColor: "rgba(0,0,0,.4)",
    content: "''",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
};

export const bannerButton = {
  alignItems: "center",
  backgroundColor: "white",
  border: "none",
  color: colors.mediumGrey,
  cursor: "pointer",
  display: "flex",
  fontSize: "15px",
  fontWeight: "bold",
  height: "80px",
  justifyContent: "center",
  width: "80px",
  "&:hover": {
    backgroundColor: colors.veryLightGrey,
  },
};

export const activeButton = {
  backgroundColor: colors.darkBlue,
  color: "white",
};

export const buttonContainer = {
  display: "flex",
  marginLeft: "-80px",
  position: "absolute",
  bottom: 0,
};

export const textContainer = {
  maxWidth: "445px",
  marginLeft: "190px",
  position: "relative",
};
