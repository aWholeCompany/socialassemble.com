/* eslint-disable react/jsx-wrap-multilines */

import React from 'react'
import { Box, Heading, Button, Image, ResponsiveContext } from 'grommet'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import ConfigContext from './ConfigContext'

const HeroButton = styled(Button)`
  padding: 15px;
`

const Hero = () => (
  <ConfigContext.Consumer>
    {Config => (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            a11yTitle="Calendar events title"
            align="center"
            justify="center"
            pad="xlarge"
            animation="slideDown"
          >
            <Box align="center" flex={true}>
              <StaticQuery
                query={graphql`
                  {
                    imageSharp {
                      original {
                        src
                      }
                    }
                  }
                `}
                render={data => {
                  const { src } = data.imageSharp.original
                  return (
                    <Box
                      width={size === 'small' ? 'xsmall' : 'small'}
                      height={size === 'small' ? 'xsmall' : 'small'}
                      margin={{ bottom: 'medium' }}
                    >
                      <Image fit="contain" src={src} a11yTitle="logo" />
                    </Box>
                  )
                }}
              />
              <Heading size="large" a11yTitle="Application title">
                {Config.title}
              </Heading>
              <Heading a11yTitle="Application sub title">
                {Config.subTitle}
              </Heading>
            </Box>
            <Box
              direction={size === 'small' ? 'column' : 'row'}
              margin={{ top: 'large' }}
              gap="medium"
            >
              <HeroButton
                href={Config.routes.calendar}
                label="Upcoming events"
                a11yTitle="Upcoming events"
                primary
              />
              <HeroButton
                href={Config.routes.addToCal}
                label="Add your event!"
                a11yTitle="Click to add your event"
                color="secondary"
                target="_blank"
              />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    )}
  </ConfigContext.Consumer>
)

export default Hero
