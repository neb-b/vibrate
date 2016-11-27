import { connect } from 'react-redux'
import NewEvent from '../components/account/new_event'
import newEvent from '../redux/action-creators/new_event'

export default connect(
  null,
  { newEvent }
)(NewEvent)
