import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginView from '../views/loginView'
import RegisterView from '../views/registerView'
import SendEamil from '../views/sendEmailResetView'
import ResetPass from '../views/resetPassView'
import LoginRedirect from '../components/redirects/toLoginPage'

const NotLoggedRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={LoginView} />
          <Route path='/register' component={RegisterView} />
          <Route path='/forgot-pass-email' component={SendEamil} />
          <Route path='/reset-pass' component={ResetPass} />
          <Route path='/' component={LoginRedirect} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default NotLoggedRouter
