import React from 'react'
import Layout from '../components/PageLayout'
import Header from '../components/Header'

  const InstructorPage = () => (
    <Layout>
      <Header />
      <div className="layout-container">
        <h1>Becoming An Instructor</h1>

        <div className="layout-container">
          <h2>To Teach a Class:</h2>
          
          <h3>Requirements:</h3>
          <p>To teach a class you will need a computer or phone with a camera that you can use for doing video chat</p>
          <p>First: join our <a href="https://join.slack.com/t/socialassemble/shared_invite/zt-cvlxg4ie-yFt57NL00u4SqUtuAmp5dg">Slack Team Here</a>.</p>
          <p>Then: create a room, or "channel" as they are called in Slack, to host your class in.</p>
          <p>This can be done by clicking the + next to the word "channels" on the left side.</p>
          <p>This will be where you will host your classes.</p>

          <h3>For Large Classes</h3>
          <p>For classes over 15 people in size, you will need to instead use <a href="https://www.zoom.us/">Zoom</a>.</p>
          <p>This size limitation is imposed by Slack</p>
        </div>

        <div className="layout-container">
          <p>Then add the class you want to teach to our calendar.</p>
          <p>Be sure to include ways people can pay you for the class and the name of the Channel you created above in the description of the event, so people know where to find you!</p>
        </div>

        <div className="layout-container">
          <h3>Then when the time arrives for the class:</h3>
          <p>First: Sign into Slack and then enter the Channel you created above.</p>
          <p>Next: Near the upper right, you wil see an icon that looks like a phone.</p>
          <p>Clicking this icon will start a video conference with everyone in the room.  Now simply teach your class!</p>

        </div>
      </div>
    </Layout>
  )

export default InstructorPage
