import * as React from 'react'
import { Storage } from 'aws-amplify'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

export interface IProps {
  profilePhoto: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}))

const UserAvatar: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles()
  let initialState: any
  const [profilePhoto, setProfilePhoto] = React.useState(initialState)

  React.useEffect(() => {
    fetchImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchImages () {
    const signedUrl = await Storage.get(props.profilePhoto)
    setProfilePhoto(signedUrl)
  }

  return (
    <Avatar
      alt='Remy Sharp'
      style={{ margin: '0 auto' }}
      src={profilePhoto}
      className={classes.large}
    />
  )
}

export default UserAvatar
