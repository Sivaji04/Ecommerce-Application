<<<<<<< HEAD
import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookie.get('jwt_token')

  if (token === undefined) {
=======
import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
>>>>>>> commited
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
