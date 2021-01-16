import Image from "next/image";
import { H3, P } from "../ui/textTypes";
import * as s from "./leaders.styl";

export default function Leader({ imageUrl, name, title }) {
  return (
    <div css={s.leaderContainer}>
      <div css={s.overlayHover}>
        <Image src={imageUrl} height="320" width="350" alt="leader-image" />
        <div css={s.overlay}>
          <div>
            <span css={{ marginRight: "32px" }}>
              <Image
                src="/icons/icon-linkedin-white.svg"
                height="32"
                width="32"
              />
            </span>
            <Image src="/icons/icon-twitter-white.svg" height="32" width="32" />
          </div>
        </div>
      </div>
      <H3 css={{ margin: "24px 0 0" }}>{name}</H3>
      <P css={s.titleText}>{title}</P>
      <div css={{ "@media (min-width: 1100px)": { display: "none" } }}>
        <span css={{ marginRight: "25px" }}>
          <Image src="/icons/icon-linkedin.svg" height="32" width="32" />
        </span>
        <Image src="/icons/icon-twitter.svg" height="32" width="32" />
      </div>
    </div>
  );
}
