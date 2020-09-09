import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SendIcon from '@material-ui/icons/Send';
import BarChartIcon from '@material-ui/icons/BarChart';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {Drawer} from "@material-ui/core";
import Home from "../views/Home";
import About from "../views/About";
import Predict from "../views/Predict";
import Analysis from "../views/Analysis";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

export default function Navigation() {
    const classes = useStyles()
      return (
        <Router>
          <div style={{ display: 'flex' }}>
              <List>
                <Link to="/" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                  </ListItem>
                </Link>
                <Link to="/about" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary={"About"} />
                  </ListItem>
                </Link>
                <Link to="/data" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Predict"} />
                  </ListItem>
                </Link>
                <Link to="/analysis" className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Analysis"} />
                  </ListItem>
                </Link>
              </List>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/data">
                <Predict />
              </Route>
              <Route exact path="/analysis">
                <Analysis />
              </Route>
            </Switch>
          </div>
        </Router>
  );
}