import React from 'react'
import { Anchor, Box, Heading, Paragraph } from 'grommet'
import Layout from '../components/Layout'

const StudentPage = () => (
  <Layout>
    <Box pad="medium">
      <Heading size="medium">Becoming An Student</Heading>

      <Paragraph>
        To join a class, first join our{' '}
        <Anchor href="https://join.slack.com/t/socialassemble/shared_invite/zt-cvlxg4ie-yFt57NL00u4SqUtuAmp5dg">
          Slack Team Here
        </Anchor>
        .
      </Paragraph>
      <Paragraph>
        Then find a class you want to join on the calendar below.
      </Paragraph>
      <Paragraph>
        Pay the instructor the amount they request, and they should invite you
        to the class before it starts.
      </Paragraph>
    </Box>
  </Layout>
)

export default StudentPage
