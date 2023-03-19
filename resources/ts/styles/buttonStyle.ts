/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export const button = css({
    padding: "1rem 1.6rem",
    border: "none",
    cursor: "pointer",
    outline: "none",
    appearance: "none",
    display: "inline-block",
    color: "#fff",
    whiteSpace: "nowrap",
    letterSpacing: "0.05em",
    fontSize: "1.25rem",
    backgroundColor: "var(--secondary-color)",
    backgroundImage: "var(--secondary-gradient)",
    "&:hover": {
        transition: "opacity .3s",
        opacity: "0.8 !important",
    },
    "&:disabled": {
        cursor: "not-allowed",
    },
});
