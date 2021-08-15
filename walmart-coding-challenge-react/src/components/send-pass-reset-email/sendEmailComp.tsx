import React, { SyntheticEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import logo from "../../content/logo3.png";
import { axiosEmail } from "./serviceSendEmail";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainDiv: {
    maxWidth: "100%",
    backgroundColor: "#000000",
    minHeight: "100vh",
  },
  portalLogo: {
    marginTop: "70px",
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
  passwordText: {
    marginTop: "5px",
    marginBottom: "5px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "4px",
  },
}));

const LoginComponent = () => {
  const classes = useStyles();
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth);
  const [username, setUsername] = React.useState("");
  const [validUser, setValidUser] = React.useState(true);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setIsDesktop(window.innerWidth);
    });
  }, [isDesktop]);

  const handleEmail = async (eve: SyntheticEvent) => {
    eve.preventDefault();
    if (username === "") {
      setValidUser(false);
      return;
    }
    const axiosResult: boolean = await axiosEmail(username);
    if (axiosResult) setSuccess(true);
    else setValidUser(false);
  };

  return (
    <>
      {isDesktop > 800 ? (
        <div className={classes.mainDiv}>
          <img className={classes.portalLogo} alt="" src={logo} />
          <Grid className={classes.outerGridContainer} container spacing={1}>
            <Grid
              style={{ backgroundColor: "#e6e6e6", borderRadius: "4px" }}
              item
              xs={12}
            >
              <h1 style={{ textAlign: "center" }}>Send password reset</h1>
              {!validUser ? (
                <h5 style={{ color: "red", textAlign: "center" }}>
                  Username does not exist!
                </h5>
              ) : null}
              {success ? (
                <h5 style={{ color: "green", textAlign: "center" }}>
                  Reset email was sent!
                </h5>
              ) : null}
              <form
                style={{ margin: "20px" }}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <TextField
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "4px",
                  }}
                  id="outlined-basic"
                  label="Username"
                  onChange={(eve) => {
                    setUsername(eve.target.value);
                  }}
                />
                <br />
                <Link to="/login">Return to login</Link>
                <br />
                <Button
                  style={{ marginTop: "10px" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleEmail}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className={classes.mainDiv}>
          <img
            className={classes.portalLogo}
            style={{ width: "70%", marginLeft: "15%" }}
            alt=""
            src={logo}
          />
          <Grid
            className={classes.outerGridContainer}
            style={{ width: "70%", marginLeft: "15%" }}
            container
            spacing={1}
          >
            <Grid
              style={{ backgroundColor: "#e6e6e6", borderRadius: "4px" }}
              item
              xs={12}
            >
              <h1 style={{ textAlign: "center" }}>Send password reset</h1>
              {!validUser ? (
                <h5 style={{ color: "red", textAlign: "center" }}>
                  Username does not exist!
                </h5>
              ) : null}
              {success ? (
                <h5 style={{ color: "green", textAlign: "center" }}>
                  Reset email was sent!
                </h5>
              ) : null}
              <form
                style={{ margin: "20px" }}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <TextField
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "4px",
                  }}
                  id="outlined-basic"
                  label="Username"
                  onChange={(eve) => {
                    setUsername(eve.target.value);
                  }}
                />
                <br />
                <Link to="/login">Return to login</Link>
                <br />
                <Button
                  style={{ marginTop: "10px" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleEmail}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default LoginComponent;
