import { educationData } from "@/data/portfolio";

import CardList from "../shared/cardsList";
import Section from "../shared/base";

export default function Education() {
  return (
    <Section id="education" eyebrow="// education" title="Where I'm learning">
      <CardList
        items={educationData.map((e) => ({
          title: e.name,
          subtitle: e.institution,
          meta: e.year,
          body: e.description,
        }))}
      />
    </Section>
  );
}
