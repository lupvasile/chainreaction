import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../ex-dashboard/listItems';
import Chart from './indiv_dash/Chart';
import Deposits from '../ex-dashboard/Deposits';
import Orders from '../ex-dashboard/Orders';
import NavBar from "./Navbar";

import SmartNavbar from "../smart_view/SmartNavbar";
import UseStyles from "./Styles";
import Summary from "./indiv_dash/Summary";
import TransactionList from "./indiv_dash/TransactionList";
import TipsList from "./indiv_dash/TipsList";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {'Energy Chain '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const IndividualDashboard = ({lastTransactions, lastUsage, aggregateData, tips}) => {
  const classes = UseStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
      <div>
     <SmartNavbar title ={"My Dashboard"}
     child={
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <Chart lastUsage = {lastUsage}/>
                </Paper>
              </Grid>
              {/* Total saved energy */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Summary data={aggregateData}/>
                </Paper>
              </Grid>
              {/* Recent transactions */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={classes.paper}>
                  <TransactionList transactions={lastTransactions}/>
                </Paper>
              </Grid>
              {/* Tips */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={classes.paper}>
                  <TipsList tips={tips}/>
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      }
         />
      </div>
  );
};

export default IndividualDashboard;