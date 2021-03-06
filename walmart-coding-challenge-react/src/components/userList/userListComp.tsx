import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import { useSelector } from 'react-redux'
import { State } from '../../redux'
import { IAppState, IUser } from '../../redux/stateStructure'
import UserAvatar from '../Avatar/AvatarComp'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'sticky',
      top: '64px',
      minWidth: '275'

    },
    text: {
      padding: theme.spacing(2, 2, 0)
    },
    paper: {
      position: 'sticky',
      height: '90.7vh',
      paddingBottom: 50
    },
    list: {
      marginBottom: theme.spacing(2)
    },
    subheader: {
      backgroundColor: theme.palette.background.paper
    },
    appBar: {
      top: 'auto',
      bottom: 0
    },
    grow: {
      flexGrow: 1
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto'
    }
  })
)

/**
 * @author revature.matthew.precilio
 *
 * This component displays the the list of all users.
 *
 * @returns
 */

export default function UserList () {
  const classes = useStyles()
  const state: IAppState | null = useSelector((state: State) => state.login)
  let currUser: string
  let userArr: IUser[]
  if (state != null) {
    userArr = state.userList
    currUser = state.loggedUser.username
  } else userArr = []

  React.useEffect(() => {}, [state])

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Paper square className={classes.paper}>
          <Typography className={classes.text} variant='h5' gutterBottom>
            All users
          </Typography>
          <List className={classes.list} style={{ maxHeight: '100%', overflow: 'auto' }}>
            {userArr.map(({ username, fname, lname, address, profilePhoto }) => (
              <React.Fragment key={username}>
                {username !== currUser ? (
                  <ListItem button>
                    <ListItemAvatar>
                      <UserAvatar profilePhoto={profilePhoto} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`@${username} (${fname} ${lname})`}
                      secondary={address}
                    />
                  </ListItem>) : null}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </div>
    </>
  )
}
