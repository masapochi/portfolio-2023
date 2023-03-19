import { css } from "@emotion/react";
import { mqMore } from "@/styles/mediaQueries";

export const skillCss = {
    self: css({ "&:not(:first-of-type)": { marginTop: "6vh" } }),
    list: css({
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.6rem",
        padding: 0,
        margin: "3vh 0 0",
        [mqMore("md")]: {
            gridTemplateColumns: "repeat(4, 1fr)",
        },
    }),
    item: css({
        textAlign: "center",
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        wordBreak: "break-all",
        gap: "0.8rem",
    }),
    image: css({
        flex: 1,
        display: "block",
        width: "80%",
        [mqMore("md")]: {
            width: "72%",
        },
        [mqMore("lg")]: {
            width: "50%",
        },
    }),
    label: css({
        marginTop: "auto",
        fontSize: "0.85rem",
        [mqMore("md")]: {
            fontSize: "1rem",
        },
    }),
};
