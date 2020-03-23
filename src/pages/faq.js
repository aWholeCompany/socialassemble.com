import React from 'react'
import { Box, Heading, Anchor, Text, Paragraph } from 'grommet'
import Layout from '../components/Layout'

const FaqPage = () => (
  <Layout>
    <Box pad="xlarge">
      <Box>
        <Text>
          <Heading size="medium">Frequently Asked Questions</Heading>

          <Heading size="small">What Is Social Assemble?</Heading>
          <Paragraph>
            Social Assemble is a distance-learning hub that was created to alleviate the financial burden that members of our community
            are experiencing due to the COVID-19 shutdowns. We bring instructors and students together, giving you and your friends an
            opportunity to make money by sharing skills and knowledge with anyone who wants to learn. 
          </Paragraph>

          <Heading size="small">How Does It Work?</Heading>
          <Paragraph>
            Using {' '}
            <Anchor href="https://zoom.us/">Zoom</Anchor>
            or another video-broadcasting platform, instructors will be able to host live classes remotely to teach their skills. All
            of the classes will be listed and linked to on our event calendar, including the date, time, description, and preferred methods
            of payment. 
          </Paragraph>

          <Heading size="small">Who Can Teach Classes?</Heading>
          <Paragraph>
            Anyone who has knowledge to share or skills to teach! Yoga instructors, meditation leaders, auto mechanics, chefs—and the list
            goes on. Whatever you have to offer, we’re happy to provide a central platform where you’ll be able to find interested students.
          </Paragraph>

          <Heading size="small">How Do I Pay for a Class?</Heading>
          <Paragraph>
            Currently, accepted methods of payment are entirely up to the instructor and will be listed in the event description. Just follow
            the instructions to make a payment and then make sure to be on time for your upcoming class! 
          </Paragraph>


          More info:
          <Paragraph>
            You can join us on {' '}
            <Anchor href="https://join.slack.com/t/socialassemble/shared_invite/zt-cvlxg4ie-yFt57NL00u4SqUtuAmp5dg">Slack</Anchor> {' '}
            If you wanna email us, you can hit me at RTPMatt at the gmailies dot comz
          </Paragraph>
        </Text>
      </Box>
    </Box>
  </Layout>
)

export default FaqPage
