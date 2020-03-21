import React from 'react'
import { Box, Heading, Anchor, Text } from 'grommet'
import Layout from '../components/Layout'

const FaqPage = () => (
  <Layout>
    <Box pad="xlarge">
      <Box>
        <Text>
          What is Social Assemble?

          This is a way for people who have skills to share, to be able to make money doing so while we are all Social Distancing.  
          The idea is for Instructors to sign up to each things online, and have other sighn up and pay themn for the effort.

          Who Can Teach Classes?

          ANYONE!  We are from Asheville, and we know there are a whole lot of yoga teachers, meditation leaders, art teachers and 
          more who are out of work and this is totally designed to help them, but we encourage ANYWONE who is in the same boat to 
          join us!  And teach a class!  Or several!  We will activly be joining and paying for some ourselves!

          More info:
          You can join us on <Anchor href="https://join.slack.com/t/socialassemble/shared_invite/zt-cvlxg4ie-yFt57NL00u4SqUtuAmp5dg">Slack</Anchor>
          If you wanna email us, you can hit me at RTPMatt at the gmailies dot comz
        </Text>
      </Box>
    </Box>
  </Layout>
)

export default FaqPage
