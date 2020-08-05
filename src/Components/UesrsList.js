import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        // color: theme.palette.text.secondary,
        // height: '80vh',
        backgroundColor: '#eeeeee',
        overflowY: 'auto',
        // display: 'flex',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },

    '@media (max-height: 850px)': {
        paper: {
            height: '60vh',
        }
    },
    '@media (max-height: 850px) and (max-width:400px)': {
        paper: {
            height: '10vh',
        }
    },
    '@media (min-height: 800px) and (min-width:400px)':{
        paper: {
            height: '80vh',
        }
    },
}));

const UsersList = ({users}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={1}>
                <Grid item>
                    <Typography variant="subtitle1"><b>Logged In</b></Typography>
                </Grid>
                <Grid item container spacing={1}>
                    {
                        users &&
                        users.map(user => (
                                <React.Fragment key={user.id}>
                                    <Grid item sm={3} xs={12}>
                                        <Avatar
                                            className={classes.small}
                                            style={{backgroundColor: user.color}}
                                        >
                                            {user.avatar}
                                        </Avatar>
                                    </Grid>
                                    <Grid item sm={9} xs={12}>
                                        <Box mt={1}>
                                            <b>{user.nickname}</b>
                                        </Box>
                                    </Grid>
                                </React.Fragment>
                            )
                        )
                    }
                </Grid>
            </Grid>
        </Paper>
    )
}

export default UsersList;