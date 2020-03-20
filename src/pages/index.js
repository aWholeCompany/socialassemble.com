import React, { PureComponent } from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

class IndexPage extends PureComponent {
  render() {
    return (
      <Layout>
        <Hero />
      </Layout>
    )
  }
}

export default IndexPage
