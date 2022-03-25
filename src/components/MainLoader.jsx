
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: "center",
        justifyContent:"center",
    },
}));

export default function Loader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
}