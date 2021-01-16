import PortfolioImage from "../PortfolioGrid/PortfolioImage";
import ArrowButton from "../ui/ArrowButton";
import { H2 } from "../ui/textTypes";
import * as s from "./featured.styl.js";

export default function Featured({ data }) {
  return (
    <div css={s.featuredContainer}>
      <div css={s.heading}>
        <H2 css={s.featuredText}>Featured</H2>
        <ArrowButton css={s.arrowButton} href="/portfolio">
          See all
        </ArrowButton>
      </div>
      <div css={s.imgContainer}>
        {data.map((d) => (
          <PortfolioImage data={d} key={d.header} />
        ))}
      </div>
    </div>
  );
}
