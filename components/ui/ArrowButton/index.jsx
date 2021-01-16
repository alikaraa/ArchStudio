import Arrow from "../../../public/icons/icon-arrow-white.jsx";
import NextLink from "next/link";
import * as s from "./arrowButton.styl";

export default function ArrowButton({ children, href, className }) {
  return (
    <NextLink href={href} passHref>
      <a css={s.button} className={className}>
        {children}
        <div css={{ marginLeft: "24px" }}>
          <Arrow width={24} height={18} />
        </div>
      </a>
    </NextLink>
  );
}
