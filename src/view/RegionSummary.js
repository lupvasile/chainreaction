import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './indiv_dash/Title';
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const RegionSummary = ({data}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>Summary</Title>
            <Typography component="p" color="textSecondary" variant="h4">
                Total produced:
            </Typography>
            <Typography component="p" variant="h4">
                {data ? data.totalProduced : "N/A"}
            </Typography>
            <Box component="span" m={2}/>
            <Typography component="p" color="textSecondary" variant="h4">
                Total consumed:
            </Typography>
            <Typography component="p" variant="h4">
                {data ? data.totalConsumed : "N/A"}
            </Typography>
        </React.Fragment>
    );
};

export default RegionSummary;
