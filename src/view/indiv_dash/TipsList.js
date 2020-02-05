import React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { makeStyles } from '@material-ui/core/styles';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

const TipsList = ({tips}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Tips</Title>
            <Table size="small">
                <TableBody>
                    {tips.map((data, index) => (
                        <TableRow key={index}>
                            <TableCell>{data}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more tips
                </Link>
            </div>
        </React.Fragment>
    );
};

export default TipsList;
