import React from 'react'
import Layout from '../components/PageLayout'
import Faq from '../components/Faq'
import Header from '../components/Header'

  const FaqPage = () => (
    <Layout>
      <Header />
      <div className="layout-container">
        <Faq />
      </div>
    </Layout>
  )

export default FaqPage
