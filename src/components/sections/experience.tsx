import { experienceData } from "@/data/portfolio";

import CardList from "../shared/cardsList";
import Section from "../shared/base";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// experience"
      title="What I've been doing"
    >
      <CardList
        items={experienceData.map((e) => ({
          title: e.position,
          subtitle: e.company,
          meta: e.year,
          body: e.description,
        }))}
      />
    </Section>
  );
}
