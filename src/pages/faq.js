import React from 'react'
import { Box, Heading, Anchor, Text } from 'grommet'
import Layout from '../components/Layout'

const FaqPage = () => (
  <Layout>
    <Box pad="xlarge">
      <Box>
        <Heading size="small">What is Social Assemble?</Heading>
        <Text>
          Social Assemble is a way for YOU to make money and/or help your
          friends make money during the Covid-19 shutdowns.
        </Text>
      </Box>
      <Box>
        <Heading size="small">How?</Heading>
        <Text>
          Are you a Yoga Instructor? Meditation Leader? Possibly you know about
          cooking or gardening, maybe you enjoy being a Dungeon Master? Whatever
          it is you do, we provide a way for you to do it, and get paid!
        </Text>
      </Box>
      <Box>
        <Heading size="small">How can I teach?</Heading>
        <Text>
          To teach a class, first join our [Slack Team]. Then add the class you
          want to teach to our calendar below. Then when the time arrives for
          the class, you need to get on Slack, and teach that class!
        </Text>
      </Box>
      <Box>
        <Heading size="small">How can I join a class?</Heading>
        <Text>
          To join a class, first join our [Slack Team]. Then find a class you
          want to join on the calendar below. Pay the instructor the amount they
          request, and they should invite you to the class before it starts.
        </Text>
      </Box>
      <Box>
        <Heading size="small">First Step</Heading>
        <Text>
          First, join our{' '}
          <Anchor href="https://join.slack.com/t/socialassemble/shared_invite/zt-cvlxg4ie-yFt57NL00u4SqUtuAmp5dg">
            Slack Team Here
          </Anchor>
        </Text>
      </Box>
    </Box>
  </Layout>
)

export default FaqPage
