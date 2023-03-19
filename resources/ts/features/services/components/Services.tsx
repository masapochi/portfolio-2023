/** @jsxImportSource @emotion/react */
import { SERVICES } from "@/features/services/consts";
import Section from "@/components/layouts/content/Section";
import { serviceCss } from "../styles";

export function Services(): JSX.Element {
  return (
    <Section id="services" title="Services" subtitle="what i provide">
      <div css={serviceCss.container}>
        {SERVICES.map((service, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <figure css={serviceCss.figure}>
              <picture>
                <source type="image/webp" srcSet={service.image} />
                <img
                  css={serviceCss.image}
                  src={service.fallback_image}
                  alt={service.label}
                  width="640"
                  height="427"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </figure>
            <h3 css={serviceCss.label}>{service.label}</h3>
            <p css={serviceCss.desc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
