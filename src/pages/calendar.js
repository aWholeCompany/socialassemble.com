import React, { PureComponent } from 'react'
import { Box } from 'grommet'
import styled from 'styled-components'
import Layout from '../components/Layout'

const gcal = `<iframe
src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=ajVzNDFvYzY0Z2E4c3Z0bWc0bWM3YjZwczhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23795548&amp;showTitle=1&amp;showNav=1"
style="border:solid 1px #777"
width="800"
height="600"
frameBorder="0"
scrolling="no"
title="cal">
</iframe>`

const Calendar = styled(Box)`
  position: relative;
  iframe {
    width: 90vw;
    height: 85vh;
  }
`

class CalendarPage extends PureComponent {
  render() {
    return (
      <Layout>
        <Calendar
          align="center"
          justify="center"
          dangerouslySetInnerHTML={{ __html: gcal }}
        />
      </Layout>
    )
  }
}

export default CalendarPage
