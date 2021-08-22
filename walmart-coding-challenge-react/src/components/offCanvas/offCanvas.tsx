import { Button, ButtonGroup, makeStyles } from '@material-ui/core'
import * as React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { OffCanvasContext } from '../navbar/navbarContext'

const useStyles = makeStyles((theme) => ({
  NavButtons: {
    position: 'relative',
    minWidth: '365px'
  }
}))

function SidePanel () {
  const history = useHistory()
  const classes = useStyles()
  const [show, setShow] = React.useState(false)

  const { toggleOffcanvas, setToggleOffcanvas } =
    React.useContext(OffCanvasContext)

  React.useEffect(() => {
    if (toggleOffcanvas) handleShow()
  }, [toggleOffcanvas])

  const handleClose = () => {
    setShow(false)
    setToggleOffcanvas(false)
  }
  const handleShow = () => setShow(true)

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ marginLeft: '144px' }}>Navigate</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ButtonGroup
            orientation='vertical'
            color='primary'
            aria-label='vertical outlined primary button group'
            variant='text'
          >
            <Button
              className={classes.NavButtons}
              onClick={() => history.push('/home')}
            >
              <Link style={{ color: '#ad121a', fontWeight: 'bold', textDecoration: 'none' }} to='/home'>Home</Link>
            </Button>
            <Button
              className={classes.NavButtons}
              onClick={() => history.push('/404')}
            >
              <Link style={{ color: '#ad121a', fontWeight: 'bold', textDecoration: 'none' }} to='/404'>News</Link>
            </Button>
            <Button
              className={classes.NavButtons}
              onClick={() => history.push('/404')}
            >
              <Link style={{ color: '#ad121a', fontWeight: 'bold', textDecoration: 'none' }} to='/404'>Events</Link>
            </Button>
            <Button
              className={classes.NavButtons}
              onClick={() => history.push('/404')}
            >
              <Link style={{ color: '#ad121a', fontWeight: 'bold', textDecoration: 'none' }} to='/404'>Grades</Link>
            </Button>
            <Button
              className={classes.NavButtons}
              onClick={() => history.push('/404')}
            >
              <Link style={{ color: '#ad121a', fontWeight: 'bold', textDecoration: 'none' }} to='/404'>Campus Life</Link>
            </Button>
          </ButtonGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SidePanel
