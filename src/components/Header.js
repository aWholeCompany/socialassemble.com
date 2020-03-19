import React from 'react'
import { Anchor, Box, Header, Menu, Text } from 'grommet'
import { Calendar } from 'grommet-icons'
import styled from 'styled-components'

const BrandAnchor = styled(Anchor)`
  &:hover {
    text-decoration: none;
    filter: brightness(85%);
  }
`

const menuItems = [
  {
    label: `Become an Instructor`,
    href: `/instructor`,
  },
  {
    label: `Take a Class`,
    href: `/student`,
  },
  {
    label: `FAQ`,
    href: `/faq`,
  },
]

export default function() {
  return (
    <Header size="large" pad="small" a11yTitle="SocialAssmble" fixed="true">
      <Box direction="row">
        <BrandAnchor hoverIndicator href="/">
          <Calendar />
        </BrandAnchor>
        <Box>
          <BrandAnchor href="/">
            <Text margin="xsmall">Social Assemble</Text>
          </BrandAnchor>
        </Box>
      </Box>
      <Menu
        dropProps={{
          align: { top: 'bottom', left: 'left' },
        }}
        dropBackground={{ color: `black`, opacity: 'medium' }}
        items={menuItems}
      />
    </Header>
  )
}
