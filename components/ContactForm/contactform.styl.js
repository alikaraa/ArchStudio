import colors from "../../colors";

export const form = {
  width: "100%",
  "@media (min-width: 1024px)": {
    width: "730px",
  },
};

export const textInput = {
  border: "none",
  borderBottom: `1px solid ${colors.darkBlue}`,
  height: "50px",
  outline: "none",
  width: "100%",
  textIndent: "30px",
  fontSize: "20px",
  "&:focus": {
    borderBottom: `3px solid ${colors.darkBlue}`,
  },
  "&::placeholder": {
    color: colors.lightGrey,
    textTransform: "capitalize",
    fontWeight: "600",
  },
};

export const errorMessage = {
  color: "red",
  position: "absolute",
  right: 0,
  bottom: "15px",
  fontSize: "15px",
  fontWeight: "600",
};

export const submitButton = {
  backgroundColor: "black",
  height: "80px",
  width: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  marginLeft: "auto",
  cursor: "pointer",
  "@media (min-width: 1024px)": {
    "&:hover": {
      backgroundColor: colors.darkGrey,
    },
  },
  "&:focus": {
    outline: "none",
  },
};
