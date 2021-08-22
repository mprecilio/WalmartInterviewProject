import * as React from 'react'
import NavBar from '../components/navbar/navbarComp'

export interface NotFoundProps {

}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: 'center', marginTop: '150' }}>404: Resource not found</h1>
    </>
  )
}

export default NotFound
