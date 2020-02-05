import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
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

const Summary = ({data}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>Summary</Title>
            <Typography component="p" color="textSecondary" variant="h6">
                Total produced:
            </Typography>
            <Typography component="p" variant="h6">
                {data ? data.totalProduced : "N/A"}
            </Typography>

            <Typography component="p" color="textSecondary" variant="h6">
                Total consumed:
            </Typography>
            <Typography component="p" variant="h6">
                {data ? data.totalConsumed : "N/A"}
            </Typography>
            <Box component="span" m={2}>
                <Divider/>
            </Box>
            <Typography component="p" color="textSecondary" variant="h4">
                Coin balance:
            </Typography>

            <Typography component="p" variant="h4">
                {data ? data.coins : "N/A"}
            </Typography>
        </React.Fragment>
    );
};

export default Summary;
