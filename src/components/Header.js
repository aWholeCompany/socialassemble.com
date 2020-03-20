import React from 'react'
import { Anchor, Box, Header, Menu, Text } from 'grommet'
import { Calendar } from 'grommet-icons'
import styled from 'styled-components'
import {
  LANDING,
  CALENDAR,
  INSTRUCTOR,
  STUDENT,
  FAQ,
} from '../constants/routes'

const BrandAnchor = styled(Anchor)`
  &:hover {
    text-decoration: none;
    filter: brightness(85%);
  }
`

const menuItems = [
  {
    label: `Calendar`,
    href: CALENDAR,
  },
  {
    label: `Become an Instructor`,
    href: INSTRUCTOR,
  },
  {
    label: `Take a Class`,
    href: STUDENT,
  },
  {
    label: `FAQ`,
    href: FAQ,
  },
]

export default function() {
  return (
    <Header size="large" pad="small" a11yTitle="SocialAssmble" fixed="true">
      <Box direction="row">
        <BrandAnchor hoverIndicator href={LANDING}>
          <Calendar />
        </BrandAnchor>
        <Box>
          <BrandAnchor href={LANDING}>
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
