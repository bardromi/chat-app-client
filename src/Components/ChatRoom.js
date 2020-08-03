import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '80vh',
        backgroundColor: '#fafafa',
    },
}));

const ChatRoom = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                justify="center"
            >
                <Grid item xs={8}>
                    <Paper className={classes.paper} elevation={3}>

                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper elevation={3}>
                        <TextField fullWidth={true}>

                        </TextField>
                    </Paper>

                </Grid>
            </Grid>
        </div>
    );
}

export default ChatRoom;