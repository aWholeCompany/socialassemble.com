import React from 'react'
import { Box, Heading, Button, Text } from 'grommet'
import Layout from '../components/Layout'
import ConfigContext from '../components/ConfigContext'

const NotFoundPage = () => (
  <Layout>
    <ConfigContext.Consumer>
      {Config => (
        <Box
          a11yTitle="Calendar events title"
          align="center"
          flex="grow"
          height="100vh"
          justify="center"
          pad="medium"
          animation="slideDown"
        >
          <Heading size="xlarge" align="center" margin="small">
            404
          </Heading>
          <Heading align="center" size="small">
            Oops, Sorry we can&#39;t find the page
          </Heading>

          <Button
            primary
            margin={{ top: 'large' }}
            href={Config.routes.landing}
            label={<Text margin="small">Go back to HomePage</Text>}
          />
        </Box>
      )}
    </ConfigContext.Consumer>
  </Layout>
)

export default NotFoundPage
