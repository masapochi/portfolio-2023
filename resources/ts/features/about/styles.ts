/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mqMore } from "@/styles/mediaQueries";

export const profileCss = {
    self: css({
        [mqMore("md")]: {
            display: "flex",
            alignItems: "center",
        },
    }),
    avatar: css({
        display: "block",
        width: "56%",
        height: "auto",
        objectFit: "cover",
        margin: "0 auto",
        [mqMore("md")]: {
            width: "32%",
        },

        [mqMore("lg")]: {
            display: "inline-block",
            width: "40%",
            marginRight: "3vw",
        },
    }),
    desc: css({
        textAlign: "center",
        fontSize: "1rem",
        margin: "2.5vh auto 0",
        [mqMore("md")]: {
            textAlign: "left",
            fontSize: "1.25rem",
        },

        [mqMore("lg")]: {
            textAlign: "left",
            width: "60%",
        },
    }),
    name: css({ color: "var(--primary-color)" }),
};
export const careerCss = {
    self: css({ "&:not(:first-of-type)": { marginTop: "6vh" } }),
    container: css({
        padding: "0 4vw",
        marginTop: "1.5rem",
        [mqMore("md")]: { padding: "0 2vw" },
    }),

    list: css({ listStyle: "none", margin: 0, padding: "0" }),
    item: css({
        listStyle: "none",
        padding: "1rem 2rem",
        counterIncrement: "section",
        position: "relative",
        [mqMore("md")]: {},
        "+li": {
            borderTop: "1px solid #707070",
        },
        "&:before": css({
            content: "counter(section)",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            height: "2rem",
            width: "2rem",
            backgroundColor: "var(--secondary-color)",
            backgroundImage: "var(--secondary-gradient)",
            color: "#ffffff",
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "2rem",
            textAlign: "center",
            borderRadius: "50%",
        }),
        ":nth-of-type(odd)": {
            borderLeft: "1px solid #707070",
            "&:before": { left: "0", marginLeft: "-1.2rem" },
            // ".career-item__inner": { marginRight: "auto" },
        },
        ":nth-of-type(even)": {
            borderRight: "1px solid #707070",
            "&:before": { right: "0", marginRight: "-1.2rem" },
            // ".career-item__inner": { marginLeft: "auto" },
        },
    }),
    title: css({ fontWeight: 600, fontSize: "1rem", color: "#909090" }),
    desc: css({
        margin: ".25rem 0 0",
        textAlign: "justify",
        fontSize: "0.85rem",
        fontWeight: "normal",
    }),
};
