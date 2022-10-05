import React, { Component } from 'react'
import Timeline from 'react-timelines'
import { Form } from 'react-bootstrap'
import axios from 'axios'
// import React, {useEffect, useState} from 'react'
import 'react-timelines/lib/css/style.css'
import { START_YEAR, NUM_OF_YEARS, NUM_OF_TRACKS } from './constants'
import { buildTimebar, buildTrack } from './builders'
import { fill } from './utils'
import './taskDistribution.css'

const now = new Date()

const timebar = buildTimebar()

// eslint-disable-next-line no-alert
const clickElement = element => alert(`Clicked element\n${JSON.stringify(element, null, 2)}`)

const MIN_ZOOM = 2
const MAX_ZOOM = 1

class taskDistribution extends Component {
  constructor(props) {
    super(props)

    const tracksById = fill(NUM_OF_TRACKS).reduce((acc, i) => {
      const track = buildTrack(i + 1)
      acc[track.id] = track
      return acc
    }, {})

    this.state = {
      open: false,
      zoom: 2,
      // eslint-disable-next-line react/no-unused-state
      tracksById,
      tracks: Object.values(tracksById),
    }
  }

  render() {
    const { open, zoom, tracks } = this.state
    const start = new Date(`${START_YEAR}`)
    const end = new Date(`${START_YEAR + NUM_OF_YEARS}`)
    return (
      <div className="app p-4 border-top border-dark">
        <div className="d-flex justify-content-between align-items-center border-bottom">
          <h2 className="title text-start">Task Distribution</h2>
          <Form.Select aria-label="Default select example" className="filter shadow-sm b mb-4" id="add">
                <option value="1">JANUARY </option>
                <option value="2">FEBRUARY</option>
                <option value="3">MARCH</option>
                <option value="4">APRIL</option>
                <option value="5">MAY</option>
                <option value="6">JUNE</option>
                <option value="7">JULY</option>
                <option value="8">AUGUST</option>
                <option value="9">SEPTEMBER</option>
                <option value="10">OCTOBER</option>
                <option value="11">NOVEMBER</option>
                <option value="12">DECEMBER</option>
          </Form.Select>
        </div>
        <Timeline
          scale={{
            start,
            end,
            zoom,
            zoomMin: MIN_ZOOM,
            zoomMax: MAX_ZOOM,
          }}
          isOpen={open}
          toggleOpen={this.handleToggleOpen}
          clickElement={clickElement}
          clickTrackButton={track => {
            // eslint-disable-next-line no-alert
            alert(JSON.stringify(track))
          }}
          timebar={timebar}
          tracks={tracks}
          now={now}
          toggleTrackOpen={this.handleToggleTrackOpen}
          enableSticky
          scrollToNow
        />
      </div>
    )
  }
}

export default taskDistribution
