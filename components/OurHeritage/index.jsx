import Image from "next/image";
import { H2, P } from "../ui/textTypes";
import colors from "../../colors";

export default function OurHeritage() {
  return (
    <div
      css={{
        display: "flex",
        padding: "200px 0px",
        justifyContent: "space-between",
        "@media (max-width: 426px)": { padding: "72px 0" },
      }}
    >
      <div
        css={{
          textAlign: "left",
          maxWidth: "50%",
          paddingRight: "50px",
          "&:before": {
            content: '""',
            borderTop: `1px solid ${colors.lightGrey}`,
            display: "block",
            marginBottom: "100px",
            width: "20%",
          },
          "@media (max-width: 768px)": { maxWidth: "100%", paddingRight: 0 },
          "@media (max-width: 426px)": {
            maxWidth: "85%",
            margin: "0 auto",
            paddingRight: 0,
          },
        }}
      >
        <H2>Our Heritage</H2>
        <P>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </P>
        <P>
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </P>
        <P>
          Our small team of world-class professionals provides input on every
          project.
        </P>
      </div>
      <div css={{ "@media (max-width: 768px)": { display: "none" } }}>
        <Image
          src="/about/desktop/image-heritage.jpg"
          height="568px"
          width="540px"
        />
      </div>
    </div>
  );
}
