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
    <Header size="large" pad="medium" a11yTitle="SocialAssmble">
      <Box>
        <BrandAnchor hoverIndicator href="/">
          <Calendar alignSelf="start" pad="small" />
          <Text textAlign="center" margin="xsmall">
            SocialAssemble
          </Text>
        </BrandAnchor>
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
