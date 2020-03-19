import React from 'react'
import { Anchor, Box, Text } from 'grommet'

export default function() {
  return (
    <Box size="large" pad="medium" a11yTitle="SocialAssmble">
      <Text textAlign="center" margin="xsmall">
        (c) 2020 A Whole Company
      </Text>
      <Text textAlign="center" margin="xsmall">
        If you would like to use our source, it is up on{' '}
        <Anchor href="https://github.com/aWholeCompany/socialassemble.com">GitHub</Anchor>
      </Text>
      <Text textAlign="center" margin="xsmall">
        Also please check out our other frieds site for helping service industry workers!{' '}
        <Anchor href="https://avl.tips">avl.tips</Anchor>
      </Text>
    </Box>
  )
}
