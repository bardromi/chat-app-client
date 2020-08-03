import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Modal, TextField, Typography, Button} from '@material-ui/core';
import axios from "axios";
import Grid from "@material-ui/core/Grid";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 200,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const EnterUser = ({userEntered}) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);
    const [name, setName] = useState("");
    const [err, setErr] = useState("");

    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        axios.post("http://localhost:3000/api/users", {nickname: name})
            .then(res => {
                if (res.data.success) {
                    setErr("");
                    handleClose();
                    userEntered(res.data.data);
                } else {
                    setErr(res.data.message);
                }
            })
    }

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Typography>Welcome to Awesome Chat</Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    error={err}
                                    id="standard-error-helper-text"
                                    placeholder="Enter Nickname"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    helperText={err}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default EnterUser;
