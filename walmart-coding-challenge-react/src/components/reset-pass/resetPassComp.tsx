import React, { SyntheticEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import logo from "../../content/logo3.png";
import { axiosReset } from "./serviceResetPassComp";
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
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validReset, setValidReset] = React.useState(true);
  const [resetResult, setResetResult] = React.useState(0);

  //initializes token and username from the uri
  const myUri = window.location.pathname;
  const myArr: string[] = myUri.split("/");
  myArr.shift();
  const token = myArr[1];
  const username = myArr[2];

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setIsDesktop(window.innerWidth);
    });
  }, [isDesktop]);

  const handleReset = async (eve: SyntheticEvent) => {
    eve.preventDefault();
    setValidReset(true);
    setResetResult(0);
    if (password !== confirmPassword) {
      setValidReset(false);
      return;
    }
    const axiosResult: number = await axiosReset(username, password, token);
    setResetResult(axiosResult);
  };

  return (
    <>
      {isDesktop > 700 ? (
        <div className={classes.mainDiv}>
          <img className={classes.portalLogo} alt="" src={logo} />
          <Grid className={classes.outerGridContainer} container spacing={1}>
            <Grid
              style={{ backgroundColor: "#e6e6e6", borderRadius: "4px" }}
              item
              xs={12}
            >
              <h1 style={{ textAlign: "center" }}>Reset password</h1>
              {!validReset ? (
                <h5 style={{ color: "red", textAlign: "center" }}>
                  Invalid username or password.
                </h5>
              ) : null}
              {resetResult === -1 ? (
                <h5 style={{ color: "red", textAlign: "center" }}>
                  Invalid username or token.
                </h5>
              ) : null}
              {resetResult === -2 ? (
                <h5 style={{ color: "red", textAlign: "center" }}>
                  Please select a password you have not used before.
                </h5>
              ) : null}
              {resetResult === 1 ? (
                <h5 style={{ color: "green", textAlign: "center" }}>
                  Password reset succefully
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
                  type="password"
                  label="Password"
                  onChange={(eve) => {
                    setPassword(eve.target.value);
                  }}
                />
                <br />
                <TextField
                  className={classes.passwordText}
                  type="password"
                  id="outlined-basic"
                  label="Confirm Password"
                  onChange={(eve) => {
                    setConfirmPassword(eve.target.value);
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
                  onClick={handleReset}
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
              <h1 style={{ textAlign: "center" }}>Reset password</h1>
              {!validReset ? (
                <h5 style={{ color: "red", textAlign: "center" }}>
                  Invalid username or password.
                </h5>
              ) : null}
              {resetResult === -1 ? (
                <h5 style={{ color: "red", textAlign: "center" }}>
                  Invalid username or token.
                </h5>
              ) : null}
              {resetResult === -2 ? (
                <h5 style={{ color: "red", textAlign: "center" }}>
                  Please select a password you have not used before.
                </h5>
              ) : null}
              {resetResult === 1 ? (
                <h5 style={{ color: "green", textAlign: "center" }}>
                  Password reset succefully
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
                  type="password"
                  label="Password"
                  onChange={(eve) => {
                    setPassword(eve.target.value);
                  }}
                />
                <br />
                <TextField
                  className={classes.passwordText}
                  type="password"
                  id="outlined-basic"
                  label="Confirm Password"
                  onChange={(eve) => {
                    setConfirmPassword(eve.target.value);
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
                  onClick={handleReset}
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
