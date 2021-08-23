import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { bindActionCreators } from 'redux'
import { ActionCreators, State } from '../../redux'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { IAppState } from '../../redux/stateStructure'
import ViewProfile from '../profile/viewProfileComp'
import EditProfile from '../profile/editProfileComp'
import {
  ProfileContext,
  EditProfileContext,
  OffCanvasContext
} from './navbarContext'
import UserAvatar from '../Avatar/AvatarCompSmall'
import OffCanvasComp from '../offCanvas/offCanvas'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: '0px',
    zIndex: 100
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

/**
 * @author revature.matthew.precilio
 *
 * Navbar component. Manages condiation redering of view profile, edit
 * profile, and side navbar.
 *
 */

export default function NavBar () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const state: IAppState | null = useSelector((state: State) => state.login)
  const { logout } = bindActionCreators(ActionCreators, dispatch)
  const myImg = useSelector(
    (state: State) => state.login?.loggedUser.profilePhoto,
    shallowEqual
  )

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [viewProfile, setViewProfile] = React.useState(false)
  const [editProfile, setEditProfile] = React.useState(false)
  const [toggleOffcanvas, setToggleOffcanvas] = React.useState(false)
  const [imgKey, setImgKey] = React.useState(myImg!)
  const open = Boolean(anchorEl)

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: '#ad121a' }} position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={() => setToggleOffcanvas(!toggleOffcanvas)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            {'Welcome ' +
              state?.loggedUser.fname +
              ' ' +
              state?.loggedUser.lname}
          </Typography>
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <EditProfileContext.Provider
                value={{ editProfile, setEditProfile, imgKey, setImgKey }}
              >
                <UserAvatar />
              </EditProfileContext.Provider>
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  setViewProfile(!viewProfile)
                  setAnchorEl(null)
                }}
              >
                View profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setEditProfile(!editProfile)
                  setAnchorEl(null)
                }}
              >
                Edit profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  logout()
                  setAnchorEl(null)
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <ProfileContext.Provider value={{ viewProfile, setViewProfile }}>
        {viewProfile && <ViewProfile />}
      </ProfileContext.Provider>
      <EditProfileContext.Provider
        value={{ editProfile, setEditProfile, imgKey, setImgKey }}
      >
        {editProfile && <EditProfile />}
      </EditProfileContext.Provider>
      <OffCanvasContext.Provider
        value={{ toggleOffcanvas, setToggleOffcanvas }}
      >
        <OffCanvasComp />
      </OffCanvasContext.Provider>
    </div>
  )
}
