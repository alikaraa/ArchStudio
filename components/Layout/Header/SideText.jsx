import * as s from "./sidetext.styl";

export default function SideText({ children }) {
  return <div css={s.sideText}>{children}</div>;
}
