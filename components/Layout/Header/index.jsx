import { useState } from "react";
import Image from "next/image";
import { ClassNames } from "@emotion/react";
import NextLink from "next/link";

import Link from "../../ui/Link";
import * as s from "./header.styl.js";
import MobileNav from "./MobileNav";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      {toggleMenu && <div css={s.overlay} onClick={handleToggle}></div>}
      {toggleMenu && <MobileNav onClick={handleToggle} />}
      <div css={s.navigation}>
        <NextLink href="/" passHref>
          <a css={s.logo}>
            <Image src="/logo.svg" alt="logo" width="97" height="40" />
          </a>
        </NextLink>
        <div
          onClick={handleToggle}
          css={{ "@media (min-width: 426px)": { display: "none" } }}
        >
          {toggleMenu ? (
            <Image
              src="/icons/icon-close.svg"
              alt="close"
              width="20"
              height="21"
            />
          ) : (
            <Image
              src="/icons/icon-hamburger.svg"
              alt="menu"
              width="24"
              height="17"
            />
          )}
        </div>
        <div css={s.navItems}>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </>
  );
}

export function NavLink({ href, children }) {
  return (
    <ClassNames>
      {({ css }) => (
        <Link href={href} activeClassName={css(s.linkActiveStyles)}>
          {children}
        </Link>
      )}
    </ClassNames>
  );
}
