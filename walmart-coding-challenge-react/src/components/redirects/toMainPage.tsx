import React from 'react'
import { useHistory } from 'react-router-dom'

/**
 * @author revature.matthew.precilio
 *
 * Redirects logged users to home page
 * if they try to access a url which does not have a route.
 *
 * @returns
 */

export default function SignInRedirect () {
  const history = useHistory()

  return (
    <>
      {history.push('/home')}
    </>
  )
}
