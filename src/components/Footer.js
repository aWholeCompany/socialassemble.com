import React from 'react'
import { Anchor, Box, Footer, Text } from 'grommet'
import styled from 'styled-components'
import { Github } from 'grommet-icons'

const IconAnchor = styled(Anchor)`
  &:hover {
    text-decoration: none;
    filter: brightness (85%);
  }
`

export default function() {
  return (
    <Footer size="large" pad="medium" a11yTitle="SocialAssmble">
      <Box margin="xsmall">&copy; 2020 A Whole Company</Box>
      <Box alignmargin="xsmall">
        <Box direction="row" align="center" alignContent="center">
          <IconAnchor href="https://github.com/aWholeCompany/socialassemble.com">
            <Github />
          </IconAnchor>
        </Box>
      </Box>
      <Box margin="xsmall">
        <Text justify="right">
          Also please tip service industry workers!{' '}
          <Anchor href="https://avl.tips">avl.tips</Anchor>
        </Text>
      </Box>
    </Footer>
  )
}
