import React from 'react'
import { Anchor, Box, Header, Menu, Text } from 'grommet'
import { Calendar } from 'grommet-icons'
import styled from 'styled-components'
import ConfigContext from './ConfigContext'

const BrandAnchor = styled(Anchor)`
  &:hover {
    text-decoration: none;
    filter: brightness(85%);
  }
`

export default function() {
  return (
    <ConfigContext.Consumer>
      {Config => (
        <Header size="large" pad="small" a11yTitle="SocialAssmble" fixed="true">
          <Box direction="row">
            <BrandAnchor hoverIndicator href={Config.routes.landing}>
              <Calendar />
            </BrandAnchor>
            <Box>
              <BrandAnchor href={Config.routes.landing}>
                <Text margin="xsmall">Social Assemble</Text>
              </BrandAnchor>
            </Box>
          </Box>
          <Menu
            dropProps={{
              align: { top: 'bottom', left: 'left' },
            }}
            dropBackground={{ color: `black`, opacity: 'medium' }}
            items={[
              {
                label: `Calendar`,
                href: Config.routes.calendar,
              },
              {
                label: `Add Your Event`,
                href: Config.routes.addToCal,
                target: `_blank`
              },
              {
                label: `Become an Instructor`,
                href: Config.routes.instructor,
              },
              {
                label: `Take a Class`,
                href: Config.routes.student,
              },
              {
                label: `FAQ`,
                href: Config.routes.faq,
              },
            ]}
          />
        </Header>
      )}
    </ConfigContext.Consumer>
  )
}
