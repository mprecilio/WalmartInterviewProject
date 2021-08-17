import React, { SyntheticEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import logo from "../../content/logo3.png";
import { axiosLogin } from "./serviceLoginComp";
import { IAppState } from "../../redux/stateStructure";
import { useDispatch } from "react-redux";
import { ActionCreators } from "../../redux";
import { bindActionCreators } from "redux";
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
  const dispatch = useDispatch();
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validLogin, setValidLogin] = React.useState(true);

  const { login } = bindActionCreators(ActionCreators, dispatch);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setIsDesktop(window.innerWidth);
    });
  }, [isDesktop]);

  const handleLogin = async (eve: SyntheticEvent) => {
    eve.preventDefault();
    if (!username || !password) {
        setValidLogin(false);
        return;
    }
    const axiosResult: IAppState | null = await axiosLogin(username, password);
    if (axiosResult) login(axiosResult);
    else setValidLogin(false);
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
              <h1 style={{ textAlign: "center" }}>Login</h1>
              {!validLogin ? (
                <h5 style={{ color: "red", textAlign: "center" }}>
                  Invalid username or password
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
                <TextField
                  className={classes.passwordText}
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  onChange={(eve) => {
                    setPassword(eve.target.value);
                  }}
                />
                <br />
                <Link to='/forgot-pass-email'>Forgot password</Link>
                <span style={{ margin: "0px 10px" }}>|</span>
                <Link to='/register'>Sign Up</Link>
                <br />
                <Button
                  style={{ marginTop: "10px" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                >
                  Login
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
              <h1 style={{ textAlign: "center" }}>Login</h1>
              {!validLogin ? (
                <h5 style={{ color: "red", textAlign: "center" }}>
                  Invalid username or password
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
                <TextField
                  className={classes.passwordText}
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  onChange={(eve) => {
                    setPassword(eve.target.value);
                  }}
                />
                <br />
                <Link to='/forgot-pass-email'>Forgot password</Link>
                <span style={{ margin: "0px 10px" }}>|</span>
                <Link to='/register'>Sign Up</Link>
                <br />
                <Button
                  style={{ marginTop: "10px" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                >
                  Login
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
