import { css } from "@emotion/react";
import { mqMore } from "@/styles/mediaQueries";
export const serviceCss = {
    container: css({
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
        [mqMore("md")]: {
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
        },
    }),
    figure: {
        margin: 0,
    },
    image: css({
        display: "block",
        [mqMore("md")]: {},
    }),
    label: css({
        fontSize: "1rem",
        marginBottom: 0,
        [mqMore("md")]: {
            fontSize: "1.15rem",
        },
    }),
    desc: css({
        color: "#b9b9b9",
        fontSize: "0.75rem",
        margin: ".5rem 0 0",
        [mqMore("md")]: {
            fontSize: ".85rem",
        },
    }),
};
