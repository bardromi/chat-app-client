import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper, TextField, Typography, Box, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '80vh',
        backgroundColor: '#fafafa',
        overflowY: 'scroll',
    },
    records: {
        margin: theme.spacing(1),
        display: "inline-block",
        padding: theme.spacing(1)
    }
}));

const ChatRoom = ({data, socket, newMessage}) => {

    const classes = useStyles();
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        socket.emit("message", {author_id: data.user_id, message: message})
        // newMessage();
    }

    console.log(data.messages);

    return (
        <Grid
            container
            justify="center"
        >
            <Grid item xs={8}>
                <Paper className={classes.paper} elevation={3}>
                    <Grid container>
                        {
                            data.messages &&
                            data.messages.map(message =>
                                (
                                    <Grid item xs={12}>
                                        <Paper className={classes.records} key={message.id}>
                                            {message.User.nickname}:
                                            <Typography variant="body1">{message.message}</Typography>
                                        </Paper>
                                    </Grid>

                                )
                            )
                        }
                    </Grid>
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