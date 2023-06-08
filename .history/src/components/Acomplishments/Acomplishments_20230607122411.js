import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const education = [
  { number: 20, text: 'Open Source Projects' },
  { number: 1000, text: 'Students' },
  { number: 1900, text: 'Github Followers' },
  { number: 5000, text: 'Github Stars' },
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Obtained Education</SectionTitle>
    <Boxes>
      {education.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Acomplishments