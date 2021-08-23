import React from 'react'
import { useHistory } from 'react-router-dom'

/**
 * @author revature.matthew.precilio
 *
 * Rediects user to login page
 *
 * @returns
 */

export default function SignInRedirect () {
  const history = useHistory()

  return (
    <>
      {history.push('/login')}
    </>
  )
}
