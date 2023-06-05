import React from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map({project} => (
        <>
          <BlogCard key={id}>
            {title}
            <Img src={image} />
            <TitleContent>
              <HeaderThree three>{title}</HeaderThree>
            </TitleContent>
          </BlogCard>
          {/* <div>{project.description}</div> */}
        </>
      ))}
    </GridContainer>
  </Section>
)

export default Projects
