/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mqMore } from "@/styles/mediaQueries";

const headerCss = {
  self: css({
    position: "absolute",
    top: "0",
    zIndex: 50,
    padding: "1rem",
    [mqMore("xl")]: {
      padding: "2rem",
    },
  }),
  heading: css({
    fontWeight: 400,
    margin: 0,
    whiteSpace: "nowrap",
    fontSize: "1.5rem",
    lineHeight: 1,
    transition: "opacity 0.3s",
    "&:hover": { opacity: 0.75 },
    [mqMore("md")]: {
      fontSize: "2.85rem",
    },
  }),
  link: css({ color: "#ccc" }),
  me: css({ color: "var(--primary-color)" }),
};

export default function Logo(): JSX.Element {
  return (
    <header css={headerCss.self} className="header" id="js-header">
      <h1 css={headerCss.heading}>
        <a css={headerCss.link} href="/">
          Masapochi<span css={headerCss.me}>.me</span>
        </a>
      </h1>
    </header>
  );
}
