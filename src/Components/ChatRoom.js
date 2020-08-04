import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Container, Grid, Paper, TextField, Typography, Box, Button} from '@material-ui/core';
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

const ChatRoom = ({user, data, socket}) => {

    const classes = useStyles();
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        socket.emit("message", {author_id: user.id, message: message})
        setMessage("");
    }

    return (
        <Grid
            container
            justify="center"
        >
            <Grid item xs={8}>
                <Paper className={classes.paper} elevation={3}>
                    <Container>
                        <Grid container>
                            {
                                data &&
                                data.map(message =>
                                    (
                                        <Grid item xs={12}>
                                            <Paper
                                                className={message.User.id === user.id ? classes.recordsMe : classes.recordsOther}
                                                key={message.id}>
                                                <Grid container spacing={1}>
                                                    {
                                                        message.User.id !== user.id &&
                                                        <Grid item xs={12}>
                                                            <b>{message.User.nickname}</b>
                                                        </Grid>
                                                    }
                                                    {
                                                        message.User.id !== user.id &&
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
                                        </Grid>
                                    )
                                )
                            }
                        </Grid>
                    </Container>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Paper elevation={3}>
                    <Box ml={2} mr={2} pt={1} pb={1}>
                        <Grid container>
                            <Grid item xs={11}>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Type a message"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Box pl={2}>
                                    <Button size="small" variant="contained" color="primary" onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>

            </Grid>
        </Grid>
    );
}

export default ChatRoom;