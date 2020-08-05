import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, Paper} from "@material-ui/core";
import Message from "./Message";

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
                                <Grid item xs={12}>
                                    <Message message={message} myMessage={message.User.id === user.id}/>
                                </Grid>
                            )
                        )
                    }
                </Grid>
            </Container>
        </Paper>
    )
}

export default MessagesBoard;