import NextLink from "next/link";
import { H3 } from "../ui/textTypes";
import * as s from "./portfolioGrid.styl";

export default function PortfolioImage({ data }) {
  return (
    <div css={{ position: "relative" }}>
      <div css={s.overlay}>
        <picture>
          <source media="(min-width:1024px)" srcSet={data.imgSrc.desktop} />
          <source media="(min-width:426px)" srcSet={data.imgSrc.tablet} />
          <img
            src={data.imgSrc.mobile}
            alt={data.header}
            css={{ width: "100%" }}
          />
        </picture>
      </div>
      {data.number && <div css={s.imgNumber}>{data.number}</div>}
      <div css={s.textContainer}>
        <H3 css={{ marginBottom: "4px" }}>{data.header}</H3>
        {data.date ? (
          <p css={{ margin: 0 }}>{data.date}</p>
        ) : (
          <NextLink href="/portfolio" passHref>
            <a css={{ color: "white", textDecoration: "none" }}>
              View All Projects
            </a>
          </NextLink>
        )}
      </div>
    </div>
  );
}
