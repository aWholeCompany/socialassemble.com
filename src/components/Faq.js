import React from 'react'
import { Box, Heading, ResponsiveContext, Text } from 'grommet'
import { useStaticQuery, graphql } from 'gatsby'
import ConfigContext from './ConfigContext'

function Faq() {
  const { allFaqYaml } = useStaticQuery(graphql`
    {
      allFaqYaml {
        edges {
          node {
            title
            answer
          }
        }
      }
    }
  `)

  return (
    <ConfigContext.Consumer>
      {() => (
        <ResponsiveContext.Consumer>
          {() => (
            <Box pad="xlarge">
              {allFaqYaml.edges.map(({ node }) => {
                return (
                  <Box>
                    <Heading size="small">{node.title}</Heading>
                    <Text>{node.answer}</Text>
                  </Box>
                )
              })}
            </Box>
          )}
        </ResponsiveContext.Consumer>
      )}
    </ConfigContext.Consumer>
  )
}

export default Faq
