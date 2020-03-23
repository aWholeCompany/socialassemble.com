import React from 'react'
import { Anchor, Box, Heading, Paragraph } from 'grommet'
import Layout from '../components/Layout'

const StudentPage = () => (
  <Layout>
    <Box pad="medium">
      <Heading size="medium">Take a Class</Heading>

      <Paragraph>
        Social Assemble makes it easy to find events and classes of interest that you can participate in from the comfort of home. 
        Many people in the community have lost gainful employment due to the ongoing COVID-19 situation, but this platform allows 
        you to learn from and engage with local skill-sharers while providing much-needed financial support. 
      </Paragraph>
      
      <Heading size="small">Here’s how it works:</Heading>

      <Paragraph>
        <ul>
          <li>Explore the calendar on our website to find events that match your interests</li>
          <li>Use the event host’s preferred method of payment to provide compensation for 
            the upcoming class—this will be listed in the event description</li>
          <li>Join the class at the appropriate time, and enjoy!</li>
        </ul>

        Note: Most event hosts will be using {' '}
        <Anchor href="https://zoom.us/">Zoom</Anchor> {' '}
        to broadcast their classes, so we recommend setting up the program before 
        the class you’re taking is scheduled to begin. 

      </Paragraph>
    </Box>
  </Layout>
)

export default StudentPage
