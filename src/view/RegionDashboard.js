import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './indiv_dash/Chart';

import SmartNavbar from "../smart_view/SmartNavbar";
import UseStyles from "./Styles";
import RegionSummary from "./RegionSummary";

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

const RegionDashboard = ({usage, aggregateData}) => {
    const classes = UseStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div>
            <SmartNavbar title={"Region Statistics"}
                         child={
                             <main className={classes.content}>
                                 <div className={classes.appBarSpacer}/>
                                 <Container maxWidth="lg" className={classes.container}>
                                     <Grid container spacing={3}>
                                         {/* Chart */}
                                         <Grid item xs={12} md={8} lg={9}>
                                             <Paper className={fixedHeightPaper}>
                                                 <Chart lastUsage={usage}/>
                                             </Paper>
                                         </Grid>
                                         {/* Total saved energy */}
                                         <Grid item xs={12} md={4} lg={3}>
                                             <Paper className={fixedHeightPaper}>
                                                 <RegionSummary data={aggregateData}/>
                                             </Paper>
                                         </Grid>
                                     </Grid>
                                     <Box pt={4}>
                                         <Copyright/>
                                     </Box>
                                 </Container>
                             </main>
                         }
            />
        </div>
    );
};

export default RegionDashboard;