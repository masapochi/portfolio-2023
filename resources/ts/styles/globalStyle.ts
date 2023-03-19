/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const globalStyle = css({
    ":root": {
        "--primary-color": "crimson",
        "--secondary-color": "#d6ae7b",
        "--secondary-gradient":
            "linear-gradient(145deg, #cbaf89 0%, #be9763 72%)",
    },
    html: { scrollBehavior: "smooth" },
    body: {
        fontFamily:
            '"Source Sans Pro","Hiragino Kaku Gothic ProN","Hiragino","BIZ UDPGothic","Meiryo","Helvetica Neue","Arial",sans-serif',
        color: "#e6e6e6",
    },
    a: { textDecoration: "none" },
    button: {
        background: "none",
        border: "none",
        outline: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        appearance: "none",
        cursor: "pointer",
    },
    img: {
        display: "inline-block",
        width: "100%",
        height: "auto",
        objectFit: "contain",
    },
});
