import * as React from 'react'
import { Storage } from 'aws-amplify'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { EditProfileContext } from '../navbar/navbarContext'

export interface IProps {
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  }
}))

const UserAvatar: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles()
  let intialState: any
  const [profilePhoto, setProfilePhoto] = React.useState(intialState)
  const { imgKey } = React.useContext(EditProfileContext)

  React.useEffect(() => {
    fetchImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgKey])

  async function fetchImages () {
    if (imgKey) {
      const signedUrl = await Storage.get(imgKey)
      setProfilePhoto(signedUrl)
    } else {
      const signedUrl = await Storage.get('default.png')
      setProfilePhoto(signedUrl)
    }
  }

  return (
    <Avatar
      alt='Remy Sharp'
      style={{ margin: '0 auto' }}
      src={profilePhoto}
      className={classes.small}
    />
  )
}

export default UserAvatar
