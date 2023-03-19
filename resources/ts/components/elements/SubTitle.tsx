/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { mqMore } from "@/styles/mediaQueries";

const heading = css({
  padding: "0",
  color: "#b3b3b3",
  fontSize: "1.6rem",
  textAlign: "center",
  fontWeight: "normal",
  borderBottom: "1px solid #404040",
  marginBottom: 0,
  [mqMore("md")]: {
    fontSize: "2rem",
    padding: "0 1vw",
  },
  [mqMore("lg")]: {
    marginTop: 0,
    textAlign: "left",
  },
});

type SubTitleType = {
  label: string;
};
export default function SubTitle({ label }: SubTitleType): JSX.Element {
  return <h3 css={heading}>{label}</h3>;
}
