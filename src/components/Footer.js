import React from 'react'
import { Anchor, Box, Footer } from 'grommet'
import { Github } from 'grommet-icons'

export default function() {
  return (
    <Footer size="large" pad="medium" a11yTitle="SocialAssmble">
      <Box textAlign="center" margin="xsmall">
        &copy; 2020 A Whole Company
      </Box>
      <Box textAlign="center" margin="xsmall">
        <Anchor href="https://github.com/aWholeCompany/socialassemble.com">
          <Github />
        </Anchor>
      </Box>
      <Box textAlign="center" margin="xsmall">
        Also please tip service industry workers!{' '}
        <Anchor href="https://avl.tips">avl.tips</Anchor>
      </Box>
    </Footer>
  )
}
