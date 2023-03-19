import { css } from "@emotion/react";

export const contactCss = {
    self: css({}),
    form: css({}),

    input: css({
        width: "100%",
        marginTop: ".25rem",
        padding: ".75rem 1.25rem",
        fontSize: "1rem",
        resize: "vertical",
        backgroundColor: "#dedede",
        "&:focus": { backgroundColor: "#fff" },
    }),

    button: css({
        marginTop: "1rem",
    }),
    alert: css({
        position: "relative",
        padding: "1rem 1rem",
        marginBottom: "1rem",
        border: "1px solid transparent",
        borderRadius: ".25rem",
    }),
    alertDanger: css({
        color: "#842029",
        backgroundColor: "#f8d7da",
        borderColor: "#f5c2c7",
    }),
    alertSuccess: css({
        color: "#0f5132",
        backgroundColor: "#d1e7dd",
        borderColor: "#badbcc",
    }),
};
