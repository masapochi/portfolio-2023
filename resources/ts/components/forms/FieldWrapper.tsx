/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FieldError } from "react-hook-form";
const field = {
  self: css({
    marginTop: "1rem",
    "&:first-of-type": {
      marginTop: 0,
    },
  }),
  label: css({ fontSize: "1.25rem" }),
  error: css({ margin: ".5rem 0 0", color: "var(--primary-color)" }),
};

type FieldWrapperType = {
  id?: string;
  className?: string;
  label: string;
  error?: FieldError | undefined;
  children: React.ReactNode;
};
export default function FieldWrapper({
  id,
  className,
  label,
  error,
  children,
}: FieldWrapperType): JSX.Element {
  return (
    <div css={field.self} className={className}>
      <label css={field.label} htmlFor={id}>
        {label}
      </label>
      {children}
      {error?.message && <p css={field.error}>{error.message}</p>}
    </div>
  );
}
