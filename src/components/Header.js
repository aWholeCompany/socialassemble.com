import React from 'react'
import { Button, Header, Menu } from 'grommet'

const menuItems = [
  {
    label: `Become an Instructor`,
    href: `instructor`,
  },
  {
    label: `Take a Class`,
    href: `student`,
  },
  {
    label: `FAQ`,
    href: `faq`,
  },
]

export default function() {
  return (
    <Header size="large" align="center" pad="small" a11yTitle="SocialAssmble">
      <Button hoverIndicator href="/">
        SocialAssemble
      </Button>
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
