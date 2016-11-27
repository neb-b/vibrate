import { reduxForm } from 'redux-form'
import Login from '../components/login'
import login from '../redux/action-creators/login'

export default reduxForm({
  form: 'login',
  onSubmit: login
})(Login)
