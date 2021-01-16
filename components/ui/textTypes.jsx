import colors from "../../colors";

const H1 = ({ children, className }) => (
  <h1
    css={{
      fontSize: "80px",
      lineHeight: "1em",
      fontWeight: "700",
      letterSpacing: "-2px",
    }}
    className={className}
  >
    {children}
  </h1>
);

const H2 = ({ children, className }) => (
  <h2
    css={{
      fontSize: "56px",
      lineHeight: "1em",
      fontWeight: "700",
      "@media(max-width: 425px)": { fontSize: "40px" },
    }}
    className={className}
  >
    {children}
  </h2>
);

const H3 = ({ children, className }) => (
  <h3
    css={{ fontSize: "18px", lineHeight: "25px", fontWeight: "700" }}
    className={className}
  >
    {children}
  </h3>
);

const LargeGreyText = ({ children, className }) => (
  <div
    css={{
      fontSize: "200px",
      color: colors.veryLightGrey,
      fontWeight: "700",
      "@media(max-width:1330px)": {
        fontSize: "150px",
      },
      "@media(max-width:1100px)": {
        fontSize: "120px",
      },
    }}
    className={className}
  >
    {children}
  </div>
);

const P = ({ children, className }) => (
  <p css={{ fontSize: "15px", lineHeight: "25px" }} className={className}>
    {children}
  </p>
);

export { H1, H2, H3, LargeGreyText, P };
