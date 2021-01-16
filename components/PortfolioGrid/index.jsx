import PortfolioImage from "./PortfolioImage";
import * as s from "./portfolioGrid.styl";

export default function PortfolioGrid({ data }) {
  return (
    <div css={s.grid}>
      {data.map((d) => {
        return <PortfolioImage data={d} key={d.header} />;
      })}
    </div>
  );
}
