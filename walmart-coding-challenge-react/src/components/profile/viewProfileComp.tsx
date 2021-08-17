import React, { useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { IAppState } from "../../redux/stateStructure";
import { useSelector } from "react-redux";
import { State } from "../../redux";
import CloseIcon from "@material-ui/icons/Close";
import { ProfileContext } from "../navbar/navbarContext";
import UserAvatar from "../Avatar/AvatarComp";

const useStyles = makeStyles((theme:Theme)=>({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

interface IProps {}

export default function MediaCard(props: IProps) {
  const classes = useStyles();

  const state: IAppState | null = useSelector((state: State) => state.login);

  let imageKey: string = "";
  if (state) imageKey = state.loggedUser.profilePhoto;

  const { viewProfile, setViewProfile } = useContext(ProfileContext);


  let dob: string = "" + state?.loggedUser.dob;
  dob = dob.substring(0, 10);
  return (
    <>
      {viewProfile ? (
        <div style={{              
          zIndex: 99,
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",}}>
          <div
            style={{
              backgroundColor: "black",
              opacity: "80%",
              zIndex: 100,
              position: "fixed",
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
            }}
          ></div>
          <Card
            style={{position: "fixed", zIndex: 100, opacity: 100, marginLeft: "40%", marginTop: "160px" }}
            className={classes.root}
            onClick={() => setViewProfile(false)}
          >
            <CardActionArea>
            <CloseIcon
                style={{ marginTop: "10px", marginLeft: "90%" }}
                onClick={() => setViewProfile(false)}
              />
              <UserAvatar profilePhoto={imageKey}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {`@${state?.loggedUser.username}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {`Name: ${state?.loggedUser.fname} ${state?.loggedUser.lname}`}
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  {`Address: ${state?.loggedUser.address}`}
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  {`Date of birth: ${dob}`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ) : null}
    </>
  );
}
