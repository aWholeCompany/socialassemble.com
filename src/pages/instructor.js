import React from 'react'
import { Anchor, Box, Heading, Paragraph } from 'grommet'
import Layout from '../components/Layout'

const InstructorPage = () => (
  <Layout>
    <Box pad="medium">
      <Heading size="medium">Become an Instructor </Heading>

      <Box pad="small">
        
        <Paragraph>
          With so many out of work in the Asheville area and elsewhere due to the ongoing COVID-19 situation, 
          we wanted to facilitate an opportunity for members of the community to create and broadcast virtual 
          classes to help make up for lost income. Social Assemble is a distance-learning hub that brings 
          instructors and prospective students together, no matter what the subject may be. From yoga to auto mechanics, 
          if you have skills or knowledge that can be shared remotely, this is the place to do it.  
        </Paragraph>

        <Heading size="small">Requirements</Heading>

        <Paragraph>
          In order to become an instructor, you’ll first need a computer or phone with a camera capable of recording 
          video. The next step is finding a platform to broadcast your class, and for ease of use, we recommend{' '}
          <Anchor href="https://zoom.us/">Zoom</Anchor>
          .
        </Paragraph>

        <Paragraph>
          After you’ve signed up on Zoom or another platform of your choice, the rest is easy: 
        </Paragraph>

        <ul>
          <li>Create an event on Zoom for the date and time that you plan to teach your class</li>
          <li>Copy the invitation link for your event</li>
          <li>Add your event to our calendar, including the invitation link and your preferred method of payment in the description</li>
          <li>When the time comes, host your event!</li>
        </ul>

      </Box>
    </Box>
  </Layout>
)

export default InstructorPage
