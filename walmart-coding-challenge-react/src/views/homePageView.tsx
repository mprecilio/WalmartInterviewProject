import React from "react";
import Nav from "../components/navbar/navbarComp";
import UserList from "../components/userList/userListComp";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PhotoCarousel from "../components/photoCarousel/photoCarousel";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "black",
      maxWidth:'100%'
    },
    paper: {
      padding: theme.spacing(2),
      margin: "20px",
      marginBottom: "10px",
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    paperBottom: {
      padding: theme.spacing(2),
      margin: "20px",
      marginBottom: "0px",
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    UserList: {
      position: "sticky",
      top: "64px",
      minWidth: "275",
    },
  })
);

const LoginView = () => {
  const classes = useStyles();
  const filler: string =
    "Cupcake ipsum dolor sit amet I love tiramisu. Pudding candy canes cake muffin dessert caramels chupa chups I love. Cupcake I love liquorice marzipan oat cake gingerbread chocolate bar.";

  return (
    <div className={classes.root}>
      <Nav />

      <Grid container spacing={1}>
        <Grid item xs={9}>
          <PhotoCarousel />
          <Grid container spacing={1}>
            <Paper className={classes.paper}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                    <h2>News:</h2>
                    <p>{filler}</p>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paper}>
                    <h5>Trending:</h5>
                    <Link to="/">Schedule of classes</Link>
                    <br />
                    <Link to="/">Transcript</Link>
                    <br />
                    <Link to="/">Parking account management</Link>
                    <br />
                    <Link to="/">Campus Card</Link>
                    <br />
                    <Link to="/">Dining hall hours</Link>
                    <br />
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h2>Events:</h2>
                <p>{filler}</p>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h2>Deadlines:</h2>
                <li>6-Week summer classes end</li>
                <li>First day of fall classes</li>
                <li>Labor day</li>
              </Paper>
            </Grid>
            <Paper className={classes.paperBottom}>
              <h2>Women in STEM:</h2>
              <p>{filler}</p>
              <a href='https://cwit.umbc.edu/cwitscholars/'>Read about Center for Women in Technology (CWIT)</a>
            </Paper>
            <Paper className={classes.paper}>
              <h2>Stay connected:</h2>
              <p>{filler}</p>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <UserList />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginView;
