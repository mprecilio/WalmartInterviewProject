import React, { SyntheticEvent, useContext } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { IAppState } from "../../redux/stateStructure";
import { useSelector } from "react-redux";
import { ActionCreators, State } from "../../redux";
import CloseIcon from "@material-ui/icons/Close";
import { EditProfileContext } from "../navbar/navbarContext";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Storage } from "aws-amplify";
import { makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useEffect } from "react";
import { axiosUpdateInfo } from './serviceEditProfile'
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme:Theme)=>({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  mainDiv: {
    maxWidth: "100%",
    backgroundColor: "#000000",
    minHeight: "100vh",
  },
  portalLogo: {
    marginTop: "10px",
    marginBottom: "20px",
    marginLeft: "30%",
    width: "39%",
  },
  outerGridContainer: {
    width: "40%",
    alignSelf: "center",
    marginTop: "0px",
    marginLeft: "30%",
  },
  middleTextboxes: {
    marginTop: "5px",
    marginBottom: "5px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "4px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

interface IProps {}

export default function MediaCard(props: IProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { login } = bindActionCreators(ActionCreators, dispatch);

  const history = useHistory();

  const state: IAppState | null = useSelector((state: State) => state.login);

  let imageKey: string = "";
  if (state) imageKey = state.loggedUser.profilePhoto;
  let currPicture : any;

  useEffect(()=>{
    fetchImages(imageKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const [dob, setDob] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [profilePhoto, setProfilePhoto] = React.useState(currPicture);
  const [compTempKey, setTempKey] = React.useState(imageKey);
  const { editProfile, setEditProfile, setImgKey } = useContext(EditProfileContext);

  const handleSubmit = async (eve: SyntheticEvent) => {
    eve.preventDefault();
    const newAppState : IAppState | null =  await axiosUpdateInfo(state, fname, lname, dob, address, compTempKey);
    if(newAppState) login(newAppState)
    fetchImages(compTempKey);
    setImgKey(compTempKey)
    console.log("checkpoint 1");
  };

  async function fetchImages(key: string) {
    const signedUrl = await Storage.get(key);
    console.log('checkpoint 2')
    setProfilePhoto(signedUrl)
  }

  const saveImageToBucket = async (eve: any) => {
    if(!eve.target.files) return;
    const file = eve.target.files[0];
    if(!file.name)return;
    await Storage.put(file.name, file);
    setTempKey(file.name);
  };

  return (
    <>
      {editProfile ? (
        <div
          style={{
            zIndex: 99,
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
          }}
        >
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
            style={{
              position: "fixed",
              zIndex: 100,
              opacity: 100,
              marginLeft: "40%",
              marginTop: "160px",
            }}
            className={classes.root}
            onChange={saveImageToBucket}
          >
            <CardActionArea disableRipple={true}>
              <CloseIcon
                style={{ marginTop: "10px", marginLeft: "90%" }}
                onClick={() => {
                  setEditProfile(false)
                  history.push('/refresh')
                }}
              />

              <Avatar
                alt="Remy Sharp"
                src={profilePhoto}
                style={{margin:'0 auto'}}
                className={classes.large}
              />
              <CardContent>
                <form
                  style={{ margin: "20px" }}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <label>Profile photo</label>
                  <Form.Control
                    type="file"
                    required
                    name="file"
                  />
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <TextField
                        className={classes.middleTextboxes}
                        id="outlined-basic"
                        label="First name"
                        onChange={(eve) => {
                          setFname(eve.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className={classes.middleTextboxes}
                        id="outlined-basic"
                        label="Last name"
                        onChange={(eve) => {
                          setLname(eve.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    className={classes.middleTextboxes}
                    id="outlined-basic"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    label="Date of birth"
                    onChange={(eve) => {
                      setDob(eve.target.value);
                    }}
                  />
                  <br />
                  <TextField
                    className={classes.middleTextboxes}
                    id="outlined-basic"
                    label="Address"
                    onChange={(eve) => {
                      setAddress(eve.target.value);
                    }}
                  />
                  <br />
                  <Button
                    style={{ marginTop: "10px" }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit update
                  </Button>
                </form>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ) : null}
    </>
  );
}
