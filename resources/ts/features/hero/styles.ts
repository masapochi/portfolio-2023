import { css } from "@emotion/react";
import { mqMore } from "@/styles/mediaQueries";

export const homeCss = css({
    height: "100vh",
    minHeight: "unset",
    position: "relative",
});

export const bgCss = {
    self: css({
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        "&:after": {
            position: "absolute",
            display: "block",
            content: '""',
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, .7)",
        },
    }),
    video: css({
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "blur(2px)",
    }),
};
export const heroCss = {
    self: css({
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }),

    main: css({
        fontFamily: '"Libre Baskerville", serif',
        position: "absolute",
        top: "30vh",
        borderBottom: "1px solid #aaa",
        [mqMore("md")]: {
            top: "20vh",
        },
        [mqMore("lg")]: {},
        [mqMore("xl")]: {
            left: 0,
            paddingBottom: "1.25rem",
            paddingRight: "2vw",
        },
    }),

    title: css({
        padding: "0",
        whiteSpace: "nowrap",
        textAlign: "center",
        [mqMore("md")]: {},
        [mqMore("lg")]: { textAlign: "left", padding: "0 5vw" },
        [mqMore("xxl")]: { padding: "0 16vw" },
    }),

    small: css({
        fontSize: "1.5rem",
        fontWeight: 300,
        display: "block",
        [mqMore("md")]: {
            fontSize: "2.4rem",
        },
        [mqMore("lg")]: {
            fontSize: "2.4rem",
            padding: "0 5vw",
            textAlign: "left",
        },
        [mqMore("xxl")]: {
            padding: "0 16vw",
        },
    }),

    large: css({
        display: "block",
        fontSize: "2.25rem",
        fontWeight: 600,
        [mqMore("md")]: {
            fontSize: "4.5rem",
        },
        [mqMore("lg")]: {
            fontSize: "6rem",
            lineHeight: "1.2",
        },
        [mqMore("xl")]: {
            fontSize: "5.6rem",
            lineHeight: "1.4",
        },
    }),

    sub: css({
        position: "absolute",
        top: "50vh",
        display: "flex",
        alignItems: "center",
        [mqMore("md")]: { top: "42vh" },
        [mqMore("lg")]: { top: "50vh" },
        [mqMore("xl")]: { top: "55vh", left: 0 },
        [mqMore("xxl")]: { top: "50vh" },
    }),
    line: css({
        height: "1.8rem",
        width: "32vw",
        marginRight: "5vw",
        backgroundColor: "rgba(255, 255, 255, .3)",
        [mqMore("md")]: { height: "2.4rem", width: "40vw" },
        [mqMore("lg")]: { width: "32vw" },
        [mqMore("xl")]: { height: "1.8rem", width: "20vw", marginRight: "3vw" },
        [mqMore("xxl")]: { width: "24vw" },
    }),
    desc: css({
        wordBreak: "break-word",
        margin: "0",
        paddingRight: "3vw",
        fontSize: "1rem",
        fontWeight: 300,
        [mqMore("md")]: { fontSize: "2rem" },
        [mqMore("lg")]: { fontSize: "1.75rem" },
        [mqMore("xl")]: { fontSize: "1.5rem" },
    }),
    cta: css({
        position: "absolute",
        top: "56vh",
        [mqMore("md")]: {
            top: "58vh",
            padding: "1.5rem 2.5rem",
            fontSize: "2rem",
        },
        [mqMore("lg")]: { top: "72vh" },
        [mqMore("xl")]: {
            padding: "1.25rem 2.5rem",
            top: "70vh",
            left: 0,
            marginLeft: "5vw",
            fontSize: "1.5rem",
        },
        [mqMore("xxl")]: {
            top: "64vh",
            marginLeft: "16vw",
        },
    }),
};
