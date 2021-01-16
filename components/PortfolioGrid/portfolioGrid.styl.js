export const overlay = {
  lineHeight: 0,
  "&:before": {
    content: "''",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "100%",
    height: "100%",
  },
  "@media (min-width: 1024px)": {
    "&:hover": {
      "&:before": {
        backgroundColor: "rgba(255,255,255,.3)",
        cursor: "pointer",
        transition: "0.3s ease-out",
      },
    },
  },
};

export const imgNumber = {
  fontSize: "200px",
  color: "rgba(255,255,255,.5)",
  fontWeight: "bold",
  position: "absolute",
  right: "16px",
  top: "10px",
  display: "none",
  "@media (min-width: 768px)": {
    display: "block",
  },
  "@media (min-width: 1024px)": {
    right: "-16px",
  },
};

export const textContainer = {
  position: "absolute",
  zIndex: 1,
  bottom: 24,
  left: 24,
  color: "white",
  "@media (min-width: 768px)": {
    bottom: 40,
    left: 40,
  },
};

export const grid = {
  display: "grid",
  gridRowGap: "24px",
  margin: "0 32px",
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "30px",
  },
};
