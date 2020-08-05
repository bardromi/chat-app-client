import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Grid, Paper, Typography} from '@material-ui/core';
import moment from 'moment';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        height: '80vh',
        backgroundColor: '#fafafa',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    recordsOther: {
        margin: theme.spacing(1),
        display: "inline-block",
        padding: theme.spacing(1),
        backgroundColor: '#e3f2fd',
    },
    recordsMe: {
        margin: theme.spacing(1),
        display: "inline-block",
        padding: theme.spacing(1),
        backgroundColor: '#00bfa5',
        textAlign: 'right',
        float: 'right'
    },
}));

const Message = ({message, myMessage}) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={1}>
                {
                    !myMessage &&
                    <Box mt={3}>
                        <Avatar
                            style={{backgroundColor: message.User.color}}
                        >
                            {message.User.avatar}
                        </Avatar>
                    </Box>
                }
            </Grid>
            <Grid item xs={11}>
                <Paper className={myMessage ? classes.recordsMe : classes.recordsOther}>
                    <Grid container spacing={1}>
                        {
                            !myMessage &&
                            <Grid item xs={12}>
                                <b>{message.User.nickname}</b>
                            </Grid>
                        }
                        <Grid item>
                            <Typography variant="body1">{message.message}</Typography>
                        </Grid>
                    </Grid>
                    {moment(message.createdAt).calendar()}
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default Message;