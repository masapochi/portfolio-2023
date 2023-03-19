/** @jsxImportSource @emotion/react */
import { SKILLS } from "@/features/skills/consts";
import SubTitle from "@/components/elements/SubTitle";
import Section from "@/components/layouts/content/Section";
import { skillCss } from "../styles";

export function Skills(): JSX.Element {
  return (
    <Section id="skills" title="Skills" subtitle="what i know">
      {SKILLS.map((skill, i) => (
        <div key={i} css={skillCss.self} className={`styles.skill`}>
          <SubTitle label={skill.label} />

          <ul css={skillCss.list} className={`styles.list`}>
            {skill.list.map((skillItem, j) => (
              <li key={j} css={skillCss.item} className={`styles.item`}>
                <img
                  css={skillCss.image}
                  className={`styles.image`}
                  loading="lazy"
                  decoding="async"
                  src={`./images/skills/${skillItem.file}.svg`}
                  alt={skillItem.name}
                  width="96"
                  height="96"
                />
                <span css={skillCss.label}>{skillItem.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
