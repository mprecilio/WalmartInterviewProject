import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../views/homePageView'
import RedirectHome from '../components/redirects/toMainPage'
import NotFound from '../views/ResourceNotFoundView'

const IsLoggedRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/404' component={NotFound} />
          <Route path='/' component={RedirectHome} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default IsLoggedRouter
