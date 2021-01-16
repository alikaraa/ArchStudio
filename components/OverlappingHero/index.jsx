import { H2, LargeGreyText, P } from "../ui/textTypes";
import * as s from "./overlappinghero.styl";

export default function OverlappingHero({
  imageSrc,
  headerText,
  subHeaderText,
  paragraphText,
}) {
  return (
    <div css={s.container}>
      <div
        css={{
          backgroundImage: `url(${imageSrc.mobile})`,
          backgroundRepeat: "no-repeat",
          height: "240px",
          backgroundSize: "cover",
          "@media (min-width: 426px)": {
            backgroundImage: `url(${imageSrc.tablet})`,
            height: "720px",
          },
          "@media (min-width: 1024px)": {
            backgroundImage: `url(${imageSrc.desktop})`,
            backgroundSize: "contain",
          },
        }}
      ></div>
      <div css={s.mainTextContainer}>
        <LargeGreyText
          css={{
            textTransform: "capitalize",
            textAlign: "right",
            display: "none",

            "@media (min-width: 768px) ": {
              display: "block",
              marginBottom: "-65px",
            },
            "@media (min-width: 1024px) ": {
              fontSize: "180px",
              position: "absolute",
              right: "-45px",
              top: "-100px",
            },
          }}
        >
          {headerText}
        </LargeGreyText>
        <div css={s.subTextContainer}>
          <H2>{subHeaderText}</H2>
          <P css={{ margin: 0 }}>{paragraphText}</P>
        </div>
      </div>
    </div>
  );
}
