import * as React from "react";
import { Storage } from "aws-amplify";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { State } from "../../redux";

export interface IProps {
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const UserAvatar: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();
  let intialState: any;
  const myImg = useSelector((state: State) => state.login?.loggedUser.profilePhoto);
  let imageKey: string ='';
  if(myImg) imageKey = myImg;
  const [profilePhoto, setProfilePhoto] = React.useState(intialState);

    React.useEffect(()=>{
        fetchImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  async function fetchImages() {
    const signedUrl = await Storage.get(imageKey);
    setProfilePhoto(signedUrl);
  }

  return (
    <Avatar
      alt="Remy Sharp"
      style={{ margin: "0 auto" }}
      src={profilePhoto}
      className={classes.small}
    />
  );
};

export default UserAvatar;
