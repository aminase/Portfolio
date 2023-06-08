import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = props => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Software developer with over four years of experience in developing, testing, and
        maintaining web applications. I am fond to combine science and technology using
        bioinformatics analysis. Aside from technical skills, I tend to be a strong communicator and
        team player.
      </SectionText>
      <Button onClick={() => (window.location = 'www.google.com')}> Learn More</Button>
    </LeftSection>
  </Section>
)

export default Hero
