/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { SNSES, MENUS } from "./consts";
import Logo from "./Logo";
import SnsLink from "./SnsLink";
import Toggler from "./Toggler";

const overlayCss = {
  self: (isOpen: boolean) =>
    css({
      position: "fixed",
      top: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: 60,
      placeContent: "center",
      overflow: "hidden",
      backdropFilter: "blur(10px)",
      transition: "clip-path 0.7s",
      clipPath: isOpen ? "circle(100%)" : "circle(0%)",
    }),
  container: css({
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "grid",
    placeContent: "center",
  }),
};
const navCss = {
  self: css({
    padding: "2vw",
    height: "100vh",
    display: "grid",
    placeContent: "center",
  }),
  list: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  }),
  link: css({
    display: "block",
    color: "#ccc",
    fontSize: "clamp(2.2rem, 3.5vw, 4rem)",
    transition: "color 0.3s",
    "&:hover": { color: "#d6ae7b" },
  }),
  sns: css({ marginTop: "1rem", display: "flex", gap: "1.5rem" }),
};

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Logo />

      <Toggler isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        css={overlayCss.self(isOpen)}
        className={`overlay ${isOpen && "open"}`}
        data-testid="overlay"
      >
        <div css={overlayCss.container} className="overlayContainer">
          <nav css={navCss.self} className="nav" id="js-global-menu">
            <ul css={navCss.list} className={"navList"}>
              {MENUS.map((menu, i) => (
                <li key={i}>
                  <a
                    css={navCss.link}
                    href={`#${menu.link}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
              <li css={navCss.sns}>
                {SNSES.map((sns, i) => (
                  <SnsLink key={i} sns={sns} styles={navCss.link} />
                ))}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
