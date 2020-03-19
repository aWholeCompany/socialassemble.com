import React from 'react'
import { Anchor, Box, Heading, Paragraph } from 'grommet'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
          First: join our{' '}
          <Anchor href="https://join.slack.com/t/socialassemble/shared_invite/zt-cvlxg4ie-yFt57NL00u4SqUtuAmp5dg">
            Slack Team Here
          </Anchor>
          .
        </Paragraph>
        <Paragraph>
          Then: create a room, or "channel" as they are called in Slack, to host
          your class in.
        </Paragraph>
        <Paragraph>
          This can be done by clicking the + next to the word "channels" on the
          left side.
        </Paragraph>
        <Paragraph>This will be where you will host your classes.</Paragraph>

        <Heading size="small">For Large Classes</Heading>
        <Paragraph>
          For classes over 15 people in size, you will need to instead use{' '}
          <Anchor href="https://www.zoom.us/">Zoom</Anchor>.
        </Paragraph>
        <Paragraph>This size limitation is imposed by Slack</Paragraph>
      </Box>

      <Box pad="small">
        <Paragraph>
          Then add the class you want to teach to our calendar.
        </Paragraph>
        <Paragraph>
          Be sure to include ways people can pay you for the class and the name
          of the Channel you created above in the description of the event, so
          people know where to find you!
        </Paragraph>
      </Box>

      <Box pad="small">
        <Heading size="small">
          Then when the time arrives for the class:
        </Heading>
        <Paragraph>
          First: Sign into Slack and then enter the Channel you created above.
        </Paragraph>
        <Paragraph>
          Next: Near the upper right, you wil see an icon that looks like a
          phone.
        </Paragraph>
        <Paragraph>
          Clicking this icon will start a video conference with everyone in the
          room. Now simply teach your class!
        </Paragraph>
      </Box>
    </Box>
    <Footer />
  </Layout>
)

export default InstructorPage
