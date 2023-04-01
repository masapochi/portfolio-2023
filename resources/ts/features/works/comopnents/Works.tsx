/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { WORKS } from "@/features/works/consts";
import Section from "@/components/layouts/content/Section";
import { mqMore } from "@/styles/mediaQueries";

const workCss = {
  container: css({
    display: "grid",
    gap: "1rem",
    [mqMore("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
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
  tags: css({
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    marginTop: "1rem",
  }),
  tag: css({
    display: "inline-block",
    padding: ".25rem .5rem",
    backgroundColor: "#ccc",
    fontSize: ".75rem",
    color: "#333",
  }),
  links: css({
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    marginTop: "1rem",
  }),
  link: css({
    color: "#e6e6e6",
    textDecoration: "underline",
  }),
};

export function Works(): JSX.Element {
  return (
    <Section id="works" title="Works" subtitle="what i made">
      <div css={workCss.container}>
        {WORKS.map((work, i) => (
          <div key={i}>
            <figure css={workCss.figure}>
              <picture>
                <source type="image/webp" srcSet={work.image} />
                <img
                  src={work.fallback_image}
                  alt={work.label}
                  width="360"
                  height="180"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </figure>
            <div>
              <h3 css={workCss.label}>{work.label}</h3>
              <p css={workCss.desc}>{work.desc}</p>
              <div css={workCss.links}>
                {work.links.map((link, j) => (
                  <a
                    key={j}
                    css={workCss.link}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
              <div css={workCss.tags}>
                {work.tags.map((tag, j) => (
                  <span key={j} css={workCss.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
