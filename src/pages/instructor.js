import React from 'react'
import { Anchor, Box, Heading, Paragraph } from 'grommet'
import Layout from '../components/Layout'

const InstructorPage = () => (
  <Layout>
    <Box pad="medium">
      <Heading size="medium">Becoming An Instructor</Heading>

      <Box pad="small">
        <Heading size="small">Requirements</Heading>
        <Paragraph>
          To teach a class you will need a computer or phone with a camera that
          you can use for doing video chat
        </Paragraph>
        <Paragraph>
          Next you will need to find a way to broadcast your class.  We recomend {' '}
          <Anchor href="https://www.zoom.us/">Zoom</Anchor>
        </Paragraph>
        <Paragraph>
          Then create an event on your chosen tool (Zoom) so that you can get a link to it for the 
          approprite time and date.  
        </Paragraph>
        <Paragraph>
          Once you have that worked out, add your event to our  {' '}
          <Anchor href="https://docs.google.com/forms/d/1fohXFO7aP3m8yyXPpm3a231_q_l2LZy07WFDOX44AWs/edit">calendar here.</Anchor>
        </Paragraph>
        <Paragraph>
          And when the time comes host your event!
        </Paragraph>
      </Box>
    </Box>
  </Layout>
)

export default InstructorPage
