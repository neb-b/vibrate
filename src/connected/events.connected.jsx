import React, { Component } from 'react'
import { connect } from 'react-redux'
import Events from '../components/events'
import fetchEvents from '../redux/action-creators/fetch_events'

class EventsPage extends Component {
  componentDidMount() {
    const { fetchEvents, location: { query } } = this.props
    fetchEvents(query)
  }

  render() {
    return (
      <Events events={this.props.events}/>
    )
  }
}

export default connect(
  (s) => ({...s}),
  { fetchEvents }
)(EventsPage)
