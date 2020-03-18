import React from 'react'
import { Heading } from 'grommet'
import { useStaticQuery, graphql } from 'gatsby'

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
    <div id="faq">
      {allFaqYaml.edges.map(({ node }) => {
        return (
          <div className="faq-item">
            <Heading size="medium">{node.title}</Heading>
            <p>{node.answer}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Faq
