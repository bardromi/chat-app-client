import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Container, Grid, Paper} from "@material-ui/core";
import Message from "./Message";
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
}));

const MessagesBoard = ({data, user}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={3}>
            <Container>
                <Grid container>
                    {
                        data &&
                        data.map(message =>
                            (
                                <React.Fragment key={message.id}>
                                    <Grid item xs={1}>
                                        {
                                            message.User.id !== user.id &&
                                            <Box mt={3}>
                                                <Avatar
                                                    style={{backgroundColor: message.User.color}}
                                                >
                                                    {message.User.avatar}
                                                </Avatar>
                                            </Box>
                                        }
                                    </Grid>
                                    <Grid xs={11}>
                                        <Message message={message} myMessage={message.User.id === user.id}/>
                                    </Grid>
                                </React.Fragment>
                            )
                        )
                    }
                </Grid>
            </Container>
        </Paper>
    )
}

export default MessagesBoard;