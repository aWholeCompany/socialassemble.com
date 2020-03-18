import React from 'react'
import Layout from '../components/PageLayout'
import Header from '../components/Header'

  const StudentPage = () => (
    <Layout>
      <Header />
      <div className="layout-container">
        <h1>Becoming An Student</h1>

        <p>To join a class, first join our <a href="https://join.slack.com/t/socialassemble/shared_invite/zt-cvlxg4ie-yFt57NL00u4SqUtuAmp5dg">Slack Team Here</a>.</p>
        <p>Then find a class you want to join on the calendar below.</p>
        <p>Pay the instructor the amount they request, and they should invite you to the class before it starts.</p>
      </div>
    </Layout>
  )

export default StudentPage
