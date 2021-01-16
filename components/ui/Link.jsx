import NextLink from "next/link";
import { useRouter } from "next/router";
import colors from "../../colors";

export default function Link({ href, children, activeClassName, className }) {
  const router = useRouter();
  const isActive = router.pathname === href;
  const classNames = isActive ? `${className} ${activeClassName}` : className;

  return (
    <NextLink href={href} passHref>
      <a
        css={{
          textDecoration: "none",
          display: "block",
          fontSize: "15px",
          color: colors.mediumGrey,
          fontWeight: "bold",
          lineHeight: "25px",
          ":hover": {
            color: colors.darkBlue,
          },
        }}
        className={classNames}
      >
        {children}
      </a>
    </NextLink>
  );
}
