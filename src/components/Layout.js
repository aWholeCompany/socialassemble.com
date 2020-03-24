import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { css, createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Box, Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import BackgroundImage from 'gatsby-background-image'
import Helmet from './Helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ConfigContext from './ConfigContext'
import flatObject from '../utils/flatObject'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const MainBox = styled(Box)`
  min-heignt: 100vh;
`

const ContentBox = styled(Box)`
  min-height: 89.4vh;
`

const enhancedTheme = (baseTheme, customTheme) => {
  const flatTheme = flatObject(customTheme)
  const colors = {
    ...grommet.global.colors,
    ...flatTheme,
  }

  return {
    ...baseTheme,
    global: {
      ...baseTheme.global,
      colors,
    },
  }
}

const Layout = ({ children }) => (
  <ConfigContext.Provider>
    <GlobalStyle />
    <ConfigContext.Consumer>
      {Config => (
        <Grommet
          theme={enhancedTheme(grommet, Config.theme)}
          full
          css={css`
            scroll-behavior: smooth;
            overflow-y: scroll;
          `}
        >
          <Helmet />
          <StaticQuery
            query={graphql`
              query {
                desktop: file(relativePath: { eq: "avl.jpg" }) {
                  childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            `}
            render={data => {
              // Set ImageData.
              const imageData = data.desktop.childImageSharp.fluid
              return (
                <BackgroundImage
                  fluid={[
                    `linear-gradient(rgba(33, 37, 41, 0.5), rgba(0, 0, 0, 0.8))`,
                    imageData,
                  ]}
                >
                  <MainBox>
                    <Header />
                    <ContentBox>{children}</ContentBox>
                    <Footer />
                  </MainBox>
                </BackgroundImage>
              )
            }}
          />
        </Grommet>
      )}
    </ConfigContext.Consumer>
  </ConfigContext.Provider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
