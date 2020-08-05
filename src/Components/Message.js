import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Grid, Paper, TextField, Typography, Box, Button} from '@material-ui/core';
import moment from 'moment';

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
        backgroundColor: '#7986cb',
    },
    recordsMe: {
        margin: theme.spacing(1),
        display: "inline-block",
        padding: theme.spacing(1),
        backgroundColor: '#81c784',
        textAlign: 'right',
        float: 'right'
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

const Message = ({message, myMessage}) => {

    const classes = useStyles();

    return (
        <Paper
            className={myMessage ? classes.recordsMe : classes.recordsOther}
            key={message.id}>
            <Grid container spacing={1}>
                {
                    !myMessage &&
                    <Grid item xs={12}>
                        <b>{message.User.nickname}</b>
                    </Grid>
                }
                {
                    !myMessage &&
                    <Grid item>
                        <Avatar
                            className={classes.small}
                            style={{backgroundColor: message.User.color}}
                        >
                            {message.User.avatar}
                        </Avatar>
                    </Grid>
                }
                <Grid item>
                    <Typography variant="body1">{message.message}</Typography>
                </Grid>
                {/*<Grid item xs={12}>*/}
                {/*    {moment(message.createdAt).calendar()}*/}
                {/*</Grid>*/}
            </Grid>
            {moment(message.createdAt).calendar()}
        </Paper>
    )
}

export default Message;