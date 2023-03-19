/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const footerCss = css({
  backgroundColor: "#111",
  textAlign: "center",
  padding: "1rem 1rem 2rem",
});

const gotopCss = css({
  position: "fixed",
  right: "1rem",
  bottom: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "clamp(2.4rem, 5vw, 4rem)",
  height: "clamp(2.4rem, 5vw, 4rem)",
  backgroundColor: "rgba(255, 255, 255, 1)",
});

export default function Footer(): JSX.Element {
  return (
    <>
      <footer css={footerCss}>
        <p>Masapochi.me</p>
        <small>© 2020 All Rights Reserved.</small>
      </footer>

      <a
        href="#home"
        id="js-gotop"
        css={gotopCss}
        className="gotop"
        aria-label="Go Back To Page Top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15.385"
          height="20"
          viewBox="0 0 15.385 20"
        >
          <path
            id="arrow-up"
            d="M14.442,4.5,6.75,12.192l1.084,1.084,5.839-5.83V24.5h1.538V7.446l5.839,5.83,1.084-1.084Z"
            transform="translate(-6.75 -4.5)"
            fill="crimson"
          />
        </svg>
      </a>
    </>
  );
}
