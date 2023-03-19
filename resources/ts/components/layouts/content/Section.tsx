/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mqMore } from "@/styles/mediaQueries";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const sectionCss = {
  self: css({
    position: "relative",
    borderBottom: "1px solid #111",
    background:
      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJElEQVQoU2PMycmRmjJlyjMGPACkhhGfAmS5UYV4Q4qR2AAHAO4bCseUOLDoAAAAAElFTkSuQmCC) repeat",
    "&:nth-of-type(odd):not(.home)": { backgroundColor: "#1a1a1a" },
    "&:nth-of-type(even):not(.home)": { backgroundColor: "#222" },
  }),
  inner: css({
    padding: "8vw 4vw 10vw 4vw",
    marginLeft: "auto",
    marginRight: "auto",
    [mqMore("lg")]: {
      display: "grid",
      gridTemplateColumns: "36% 1fr",
      maxWidth: "1200px",
    },
  }),
  head: css({
    textAlign: "center",
    [mqMore("lg")]: {
      textAlign: "left",
    },
  }),
  headerInner: css({
    [mqMore("lg")]: {
      position: "sticky",
      top: "2rem",
    },
  }),
  title: css({
    color: "#d6ae7b",
    fontWeight: 500,
    fontSize: "2.85rem",
    margin: 0,
    [mqMore("md")]: {
      fontSize: "5rem",
    },
    [mqMore("lg")]: {
      fontSize: "4rem",
    },
  }),
  subtitle: css({
    position: "relative",
    display: "inline-block",
    fontWeight: 300,
    margin: 0,
    fontSize: "1.25rem",
    [mqMore("md")]: {
      fontSize: "2rem",
    },
    [mqMore("lg")]: {
      fontSize: "1.75rem",
    },
  }),
  body: css({
    marginTop: "2rem",
    [mqMore("md")]: {
      marginTop: "4rem",
    },
    [mqMore("lg")]: {
      marginTop: 0,
    },
  }),
};

type SectionProps = {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
}: SectionProps): JSX.Element {
  gsap.registerPlugin(ScrollTrigger);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap
      .timeline({
        defaults: {
          autoAlpha: 0,
          ease: "power2.ease",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          toggleActions: "play reverse play reverse",
        },
      })
      .from(headerRef.current, { y: 30 })
      .from(bodyRef.current, { y: 30 });
  }, []);

  return (
    <section
      css={sectionCss.self}
      className={`section-self ${id}`}
      id={id}
      ref={sectionRef}
    >
      <div css={sectionCss.inner} className={`section-inner`}>
        <div css={sectionCss.head} className="section-head">
          <div css={sectionCss.headerInner} ref={headerRef}>
            <h1 css={sectionCss.title} className="section-title">
              {title}
            </h1>
            <h2 css={sectionCss.subtitle} className="section-subtitle">
              - {subtitle} -
            </h2>
          </div>
        </div>
        <div css={sectionCss.body} className="section-body" ref={bodyRef}>
          {children}
        </div>
      </div>
    </section>
  );
}
