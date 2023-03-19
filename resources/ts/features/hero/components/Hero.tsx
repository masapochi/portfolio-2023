/** @jsxImportSource @emotion/react */

import { button } from "@/styles/buttonStyle";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { homeCss, heroCss, bgCss } from "../styles";
export function Hero(): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLSpanElement>(null);
  const largeRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const catchRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const tlDefault = { defaults: { ease: "power2.ease", autoAlpha: 0 } };
    const heroTl = gsap
      .timeline(tlDefault)
      .to([smallRef.current, largeRef.current], { autoAlpha: 0, y: 30 })
      .from(heroRef.current, { xPercent: -100 })
      .to(
        [smallRef.current, largeRef.current],
        { autoAlpha: 1, y: 0, stagger: 0.5 },
        "+=.5"
      );
    const introTl = gsap
      .timeline(tlDefault)
      .from(lineRef.current, { xPercent: -100 })
      .from(catchRef.current, { y: 30 });
    const ctaTl = gsap.timeline(tlDefault).from(ctaRef.current, { y: 30 });
    gsap.timeline().add(heroTl).add(introTl).add(ctaTl);
  }, []);

  return (
    <section css={homeCss} className="section home" id="home">
      <div css={bgCss.self}>
        <video
          css={bgCss.video}
          className="hero-bg__video"
          poster="./movies/programming_loop_poster.png"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="./movies/programming_loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div css={heroCss.self}>
        <h1 css={heroCss.main} ref={heroRef}>
          <span css={[heroCss.title, heroCss.small]} ref={smallRef}>
            I'm loving
          </span>
          <span css={[heroCss.title, heroCss.large]} ref={largeRef}>
            Beautiy in the Code
          </span>
        </h1>

        <div css={heroCss.sub}>
          <div css={heroCss.line} aria-hidden ref={lineRef}></div>
          <p css={heroCss.desc} ref={catchRef}>
            Readable code enhances usability, productivity and maintainability.
          </p>
        </div>

        <a css={[button, heroCss.cta]} ref={ctaRef}>
          Browse Works
        </a>
      </div>
    </section>
  );
}
