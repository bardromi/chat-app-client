import React, {useState} from 'react';
import {Box, Button, Grid, Paper, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: '#eeeeee',
    },
}));

const ChatInput = ({user, socket}) => {
    const classes = useStyles();

    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        socket.emit("message", {author_id: user.id, message: message})
        setMessage("");
    }

    const onKeyPress = (e) => {
        if (e.which === 13) {
            handleSubmit();
        }
    }

    return (
        <Paper className={classes.paper} elevation={3}>
            <Box ml={2} mr={2} pt={1} pb={1}>
                <Grid container>
                    <Grid item xs={11}>
                        <TextField
                            fullWidth={true}
                            placeholder="Type a message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            onKeyPress={onKeyPress}
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
    )
}

export default ChatInput;