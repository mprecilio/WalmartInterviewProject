import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IAppState } from '../../redux/stateStructure';
import { useSelector } from 'react-redux';
import { State } from '../../redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const state: IAppState | null = useSelector((state: State) => state.login);
  let dob : string = ''+state?.loggedUser.dob;
  dob = dob.substring(0,10)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`@${state?.loggedUser.username}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Name: ${state?.loggedUser.fname} ${state?.loggedUser.lname}`}
          </Typography><br />
          <Typography variant="body2" color="textSecondary" component="p">
            {`Address: ${state?.loggedUser.address}`}
          </Typography><br />
          <Typography variant="body2" color="textSecondary" component="p">
            {`Date of birth: ${dob}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}