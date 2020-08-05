import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, Paper} from "@material-ui/core";
import Message from "./Message";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        // height: '80vh',
        backgroundColor: '#fafafa',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    '@media (max-height: 850px)': {
        paper: {
            height: '60vh',
        }
    },
    '@media (min-height: 851px)': {
        paper: {
            height: '80vh',
        }
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
                                <Message key={message.id} message={message} myMessage={message.User.id === user.id}/>
                            )
                        )
                    }
                </Grid>
            </Container>
        </Paper>
    )
}

export default MessagesBoard;