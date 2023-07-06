import React from 'react';
import { useNavigate } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import PropTypes from 'prop-types'; // ES6

const styles = {
  card: {
    maxWidth: 720,
    margin: '0 auto',
    marginTop: 120,
  },
};

const NoFound404Page = function ({ classes }) {
  const goToHome = function () {
    const navigate = useNavigate();
    setTimeout(navigate(`/home`), 1000);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <DeveloperModeIcon />
          {'  '} Page not Found
        </Typography>
        <Typography variant="body1" component="p">
          It seems that you have landed here by mistake. No problem, you can
          start from home again.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => goToHome()}>
          Go to home
        </Button>
      </CardActions>
    </Card>
  );
};

NoFound404Page.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(NoFound404Page);
