/** @jsxImportSource @emotion/react */

import { CAREERS } from "@/features/about/consts";
import SubTitle from "@/components/elements/SubTitle";
import Section from "@/components/layouts/content/Section";
import { profileCss, careerCss } from "../styles";

export function About(): JSX.Element {
  return (
    <Section id="about" title="About" subtitle="who i am">
      <>
        <div css={profileCss.self} className="myself">
          <img
            css={profileCss.avatar}
            className="myself__avatar"
            loading="lazy"
            decoding="async"
            src="./images/about/profile.svg"
            alt="Masapochi"
            width="175"
            height="175"
          />
          <p css={profileCss.desc} className="myself__desc">
            Hello. My name is{" "}
            <span css={profileCss.name} className="myself__color">
              Masapochi
            </span>
            .<br />
            I'm a Frontend & Backend Developer in Japan.
          </p>
        </div>

        <div css={careerCss.self}>
          <SubTitle label="Motto" />
          <div>
            <p style={{ textAlign: "justify" }}>
              お客様・ユーザーの視点を大切にし、ビジネス目標の達成につながるアクションに努めています。
              <br />
              近年のウェブサイトは様々な要素が組み合わさっています。開発とデザインの経験、様々なツールやAPIを組み合わせて、最適なユーザー体験を提供します。
              <br />
              新しいテクノロジーに興味があり、キャッチアップのため日々スキルを磨いています。
              <br />
              魅力的なデザイン、アニメーションにも意欲的に取り組んでいます。
            </p>
          </div>
        </div>

        <div css={careerCss.self} className="careerSelf">
          <SubTitle label="Career" />
          <div css={careerCss.container} className="careerContainer">
            <ol css={careerCss.list} className="careerList">
              {CAREERS.map((career, i) => (
                <li key={i} css={careerCss.item} className="careerItem">
                  <span css={careerCss.title} className="careerTitle">
                    {career.title}
                  </span>
                  <h3 css={careerCss.desc} className="careerDesc">
                    {career.desc}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </>
    </Section>
  );
}
