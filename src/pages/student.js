import React from 'react'
import { Anchor, Box, Heading, Paragraph } from 'grommet'
import Layout from '../components/Layout'

const StudentPage = () => (
  <Layout>
    <Box pad="medium">
      <Heading size="medium">Becoming An Student</Heading>

      <Paragraph>
        First: find a class on our {' '}
        <Anchor href="https://socialassemble.com/calendar/">calendar</Anchor>
      </Paragraph>

      <Paragraph>
        Next: Pay the host of the event the amount they ask using one of the payment methods they list in the description.
      </Paragraph>

      <Paragraph>
        Finally: Join the event at the appropriate time.  The event will probably be hosted on <Anchor href="https://www.zoom.us/">Zoom so we recomend you set that up first.</Anchor>
      </Paragraph>
    </Box>
  </Layout>
)

export default StudentPage
