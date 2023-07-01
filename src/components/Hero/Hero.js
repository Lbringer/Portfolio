import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Think Different, <br />
          Create Extraordinary
        </SectionTitle>
        <SectionText>
          I'm Aditya Garimella, a B.Tech graduate in Computer Science. I'm
          passionate about creating innovative web solutions, leveraging
          Salesforce for business growth, and tackling complex computational
          problems. Let's collaborate and empower the digital future together.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://docs.google.com/document/d/1awixao7To1ywadMwMecW0e2cXfE9FL0T56v0l-zjCVo/edit?usp=sharing")
          }
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
