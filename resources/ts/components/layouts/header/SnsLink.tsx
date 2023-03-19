/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

const snsCss = {
  link: css({ fontSize: "clamp(1.4rem, 3.5vw, 2rem)" }),
  icon: css({
    width: "24px",
    height: "24px",
    marginRight: "0.4rem",
    verticalAlign: "text-bottom",
  }),
};

type SnsLinkProps = {
  sns: {
    url: string;
    iconPath: string;
    label: string;
  };
  styles: SerializedStyles;
};

export default function SnsLink({ sns, styles }: SnsLinkProps): JSX.Element {
  return (
    <a
      css={[styles, snsCss.link]}
      href={sns.url}
      target="_blank"
      rel="noopener"
    >
      <img
        css={snsCss.icon}
        loading="lazy"
        decoding="async"
        src={sns.iconPath}
        alt={sns.label}
        width="24"
        height="24"
      />
      {sns.label}
    </a>
  );
}
