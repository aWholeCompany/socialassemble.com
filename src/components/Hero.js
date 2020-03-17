/* eslint-disable react/jsx-wrap-multilines */

import React from 'react'
import { Box, Heading, Button, Image, ResponsiveContext } from 'grommet'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import ConfigContext from './ConfigContext'

const HeroButton = styled(Button)`
  padding: 20px;
`

const Hero = () => (
  <ConfigContext.Consumer>
    {appConfig => (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            a11yTitle="Calendar events title"
            align="center"
            flex="grow"
            height="100vh"
            justify="center"
            pad="medium"
            animation="slideDown"
          >
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

            <Heading size="large" align="center" a11yTitle="Application title">
              {appConfig.title}
            </Heading>

            {appConfig.subTitle && (
              <Heading align="center" a11yTitle="Application sub title">
                {appConfig.subTitle}
              </Heading>
            )}

            <div>
              <h2>What is Social Assemble?</h2>
              <p>Social Assemble is a way for YOU to make money and/or help your friends make money during the Covid-19 shutdowns.</p>

              <h3>How:</h3>
              <p>Are you a Yoga Instructor?  Meditation Leader?  Possibly you know about cooking or gardening, maybe you enjoy being a Dungeon Master?  Whatever it is you do, we provide a way for you to do it, and get paid!</p>

              <p>We do this using our own Slack Team!</p>

              <h4>How can I teach?</h4>
              <p>To teach a class, first join our [Slack Team].  Then add the class you want to teach to our calendar below.  Then when the time arrives for the class, you need to get on Slack, and teach that class!</p>

              <h4>How can I join a class?</h4>
              <p>To join a class, first join our [Slack Team].  Then find a class you want to join on the calendar below.  Pay the instructor the amount they request, and they should invite you to the class before it starts.</p>
            </div>

            <Box
              direction={size === 'small' ? 'column' : 'row'}
              margin={{ top: 'large' }}
              gap="medium"
            >
              <HeroButton
                href="#calendars"
                label="See all the events"
                a11yTitle="See all the events"
                primary
              />
              <HeroButton
                href={appConfig.formLink}
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
