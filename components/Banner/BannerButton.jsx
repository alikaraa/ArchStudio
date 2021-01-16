import * as s from "./banner.styl";

export default function BannerButton({ children, onClick, className }) {
  return (
    <div css={s.bannerButton} onClick={onClick} className={className}>
      {children}
    </div>
  );
}
