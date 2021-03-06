import React, { SyntheticEvent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import logo from '../../content/logo3.png'
import { axiosRegister, emailChecker } from './serviceRegisterComp'
import { IAppState } from '../../redux/stateStructure'
import { useDispatch } from 'react-redux'
import { ActionCreators } from '../../redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  mainDiv: {
    maxWidth: '100%',
    backgroundColor: '#000000',
    minHeight: '100vh'
  },
  portalLogo: {
    marginTop: '10px',
    marginBottom: '20px',
    marginLeft: '30%',
    width: '39%'
  },
  outerGridContainer: {
    width: '40%',
    alignSelf: 'center',
    marginTop: '0px',
    marginLeft: '30%'
  },
  middleTextboxes: {
    marginTop: '5px',
    marginBottom: '5px',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '4px'
  }
}))

const RegisterComp = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [fname, setFname] = React.useState('')
  const [lname, setLname] = React.useState('')
  const [dob, setDob] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [isEmail, setIsEmail] = React.useState(true)
  const [validRegister, setValidRegister] = React.useState(true)
  const [validUsername, setValidUsername] = React.useState(true)
  const [validEmail, setValidEmail] = React.useState(true)

  const { register } = bindActionCreators(ActionCreators, dispatch)

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setIsDesktop(window.innerWidth)
    })
  }, [isDesktop])

  const handleRegister = async (eve: SyntheticEvent) => {
    eve.preventDefault()
    setValidRegister(true)
    setValidUsername(true)
    setValidEmail(true)
    setIsEmail(true)
    if (
      !username ||
      !password ||
      !fname ||
      !lname ||
      !dob ||
      !address ||
      !email
    ) {
      setValidRegister(false)
      return
    }
    if (!emailChecker(email)) {
      setIsEmail(false)
      return
    }
    const axiosResult: IAppState | null = await axiosRegister(
      username,
      password,
      fname,
      lname,
      dob,
      address,
      email
    )

    if (axiosResult.loggedUser.userId > 0) register(axiosResult)
    else {
      if (axiosResult.loggedUser.userId === -1) setValidUsername(false)
      if (axiosResult.loggedUser.userId === -2) setValidEmail(false)
    }
  }

  /**
 * @author revature.matthew.precilio
 *
 * This component displays the registration page. Once registration data is validated, the
 * user info is stored in the redux store.
 *    -Note the view will change based on the width of the page
 *
 * @returns
 */

  return (
    <>
      {isDesktop > 700 ? (
        <div className={classes.mainDiv}>
          <img className={classes.portalLogo} alt='' src={logo} />
          <Grid className={classes.outerGridContainer} container spacing={1}>
            <Grid
              style={{ backgroundColor: '#e6e6e6', borderRadius: '4px' }}
              item
              xs={12}
            >
              <h1 style={{ textAlign: 'center' }}>Register</h1>
              {!validRegister ? (
                <h5 style={{ color: 'red', textAlign: 'center' }}>
                  Please enter all information
                </h5>
              ) : null}
              {!validEmail ? (
                <h5 style={{ color: 'red', textAlign: 'center' }}>
                  The email is already associated with an accout.
                </h5>
              ) : null}
              {!validUsername ? (
                <h5 style={{ color: 'red', textAlign: 'center' }}>
                  The username is taken!
                </h5>
              ) : null}
              {!isEmail ? (
                <h5 style={{ color: 'red', textAlign: 'center' }}>
                  Please enter a valid email address
                </h5>
              ) : null}
              <form
                style={{ margin: '20px' }}
                className={classes.root}
                noValidate
                autoComplete='off'
              >
                <TextField
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '4px'
                  }}
                  id='outlined-basic'
                  name='username'
                  label='Username'
                  onChange={(eve) => {
                    setUsername(eve.target.value)
                  }}
                />
                <br />
                <TextField
                  required
                  className={classes.middleTextboxes}
                  type='password'
                  name='password'
                  id='outlined-basic'
                  label='Password'
                  onChange={(eve) => {
                    setPassword(eve.target.value)
                  }}
                />
                <br />
                <Grid container spacing={1}>
                  <Grid
                    style={{ backgroundColor: '#e6e6e6', borderRadius: '4px' }}
                    item
                    xs={6}
                  >
                    <TextField
                      required
                      className={classes.middleTextboxes}
                      id='outlined-basic'
                      name='fname'
                      label='First name'
                      onChange={(eve) => {
                        setFname(eve.target.value)
                      }}
                    />
                  </Grid>
                  <Grid
                    style={{ backgroundColor: '#e6e6e6', borderRadius: '4px' }}
                    item
                    xs={6}
                  >
                    <TextField
                      required
                      className={classes.middleTextboxes}
                      id='outlined-basic'
                      name='lname'
                      label='Last name'
                      onChange={(eve) => {
                        setLname(eve.target.value)
                      }}
                    />
                  </Grid>
                </Grid>
                <TextField
                  className={classes.middleTextboxes}
                  required
                  id='outlined-basic'
                  name='email'
                  label='Email address'
                  type='email'
                  onChange={(eve) => {
                    setEmail(eve.target.value)
                  }}
                />
                <br />
                <TextField
                  required
                  className={classes.middleTextboxes}
                  id='outlined-basic'
                  type='date'
                  name='dob'
                  InputLabelProps={{ shrink: true }}
                  label='Date of birth'
                  onChange={(eve) => {
                    setDob(eve.target.value)
                  }}
                />
                <br />
                <TextField
                  required
                  className={classes.middleTextboxes}
                  id='outlined-basic'
                  label='Address'
                  name='address'
                  onChange={(eve) => {
                    setAddress(eve.target.value)
                  }}
                />
                <br />
                <Link to='/login'>Return to login</Link>
                <br />
                <Button
                  style={{ marginTop: '10px' }}
                  type='submit'
                  variant='contained'
                  color='primary'
                  onClick={handleRegister}
                >
                  Register
                </Button>
              </form>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className={classes.mainDiv}>
          <img
            className={classes.portalLogo}
            style={{ width: '70%', marginLeft: '15%' }}
            alt=''
            src={logo}
          />
          <Grid
            className={classes.outerGridContainer}
            style={{ width: '70%', marginLeft: '15%' }}
            container
            spacing={1}
          >
            <Grid
              style={{ backgroundColor: '#e6e6e6', borderRadius: '4px' }}
              item
              xs={12}
            >
              <h1 style={{ textAlign: 'center' }}>Register</h1>
              {!validRegister ? (
                <h5 style={{ color: 'red', textAlign: 'center' }}>
                  Please enter all information
                </h5>
              ) : null}
              {!validEmail ? (
                <h5 style={{ color: 'red', textAlign: 'center' }}>
                  The email is already associated with an accout.
                </h5>
              ) : null}
              {!validUsername ? (
                <h5 style={{ color: 'red', textAlign: 'center' }}>
                  The username is taken!
                </h5>
              ) : null}
              {!isEmail ? (
                <h5 style={{ color: 'red', textAlign: 'center' }}>
                  Please enter a valid email address
                </h5>
              ) : null}
              <form
                style={{ margin: '20px' }}
                className={classes.root}
                noValidate
                autoComplete='off'
              >
                <TextField
                  required
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '4px'
                  }}
                  id='outlined-basic'
                  name='username'
                  label='Username'
                  onChange={(eve) => {
                    setUsername(eve.target.value)
                  }}
                />
                <br />
                <TextField
                  required
                  className={classes.middleTextboxes}
                  type='password'
                  name='password'
                  id='outlined-basic'
                  label='Password'
                  onChange={(eve) => {
                    setPassword(eve.target.value)
                  }}
                />
                <br />
                <Grid container spacing={1}>
                  <Grid
                    style={{ backgroundColor: '#e6e6e6', borderRadius: '4px' }}
                    item
                    xs={6}
                  >
                    <TextField
                      required
                      className={classes.middleTextboxes}
                      name='fname'
                      id='outlined-basic'
                      label='First name'
                      onChange={(eve) => {
                        setFname(eve.target.value)
                      }}
                    />
                  </Grid>
                  <Grid
                    style={{ backgroundColor: '#e6e6e6', borderRadius: '4px' }}
                    item
                    xs={6}
                  >
                    <TextField
                      required
                      className={classes.middleTextboxes}
                      id='outlined-basic'
                      name='lname'
                      label='Last name'
                      onChange={(eve) => {
                        setLname(eve.target.value)
                      }}
                    />
                  </Grid>
                </Grid>
                <TextField
                  className={classes.middleTextboxes}
                  required
                  id='outlined-basic'
                  label='Email address'
                  name='email'
                  type='email'
                  onChange={(eve) => {
                    setEmail(eve.target.value)
                  }}
                />
                <br />
                <TextField
                  required
                  className={classes.middleTextboxes}
                  id='outlined-basic'
                  type='date'
                  name='dob'
                  InputLabelProps={{ shrink: true }}
                  label='Date of birth'
                  onChange={(eve) => {
                    setDob(eve.target.value)
                  }}
                />
                <br />
                <TextField
                  required
                  className={classes.middleTextboxes}
                  id='outlined-basic'
                  name='address'
                  label='Address'
                  onChange={(eve) => {
                    setAddress(eve.target.value)
                  }}
                />
                <br />
                <Link to='/login'>Return to login</Link>
                <br />
                <Button
                  style={{ marginTop: '10px' }}
                  type='submit'
                  variant='contained'
                  color='primary'
                  onClick={handleRegister}
                >
                  Register
                </Button>
              </form>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  )
}

export default RegisterComp
