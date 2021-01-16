import { NavLink } from "./index";
import * as s from "./header.styl.js";

export default function MobileNav() {
  return (
    <div css={s.navItemsMobile}>
      <NavLink href="/portfolio" css={s.navItemMobile}>
        Portfolio
      </NavLink>
      <NavLink href="/about" css={s.navItemMobile}>
        About Us
      </NavLink>
      <NavLink href="/contact" css={s.navItemMobile}>
        Contact
      </NavLink>
    </div>
  );
}
