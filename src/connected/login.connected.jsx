import { connect } from 'react-redux'
import Login from '../components/login'
import login from '../redux/action-creators/login'

export default connect(
  null,
  { login }
)(Login)
