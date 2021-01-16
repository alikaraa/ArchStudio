import colors from "../../colors";

export const contactContainer = {
  color: colors.darkGrey,
  "@media (min-width: 768px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "@media (min-width: 900px)": { display: "block" },
};

export const contactDetailsContainer = {
  margin: "200px auto",
  "@media (max-width: 426px)": {
    maxWidth: "85%",
    margin: "72px auto",
  },
  "@media (min-width: 900px)": {
    display: "flex",
    justifyContent: "space-between",
  },
};

export const contactDetailsText = {
  marginTop: 0,
  maxWidth: "30%",
  "&:before": {
    content: '""',
    borderTop: `1px solid ${colors.lightGrey}`,
    display: "block",
    marginBottom: "67px",
    width: "65px",
  },
};

export const viewMapButton = {
  color: colors.darkBlue,
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
  background: "none",
  fontSize: "15px",
  fontFamily: '"Spartan",sans-serif',
  padding: 0,
  "&:focus": {
    outline: "none",
  },
};

export const viewMapText = {
  marginRight: "24px",
  borderBottom: "1px solid transparent",
  "@media (min-width: 900px)": {
    "&:hover": {
      borderBottom: `1px solid ${colors.darkBlue}`,
    },
  },
};
