import React, {useState} from 'react';
import EnterUser from "./Components/EnterUser";
import ChatRoom from "./Components/ChatRoom";
import socketIOClient from "socket.io-client";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import config from './config';

const ENDPOINT = config.server;

const useStyles = makeStyles(() => ({
    title: {
        textAlign: 'center',
    },
}));

const App = () => {
    const classes = useStyles();

    const [socket, setSocket] = useState(null);
    const [data, setData] = useState([]);
    const [user, setUser] = useState();


    const userEntered = (user) => {
        let socket = socketIOClient(ENDPOINT);
        setSocket(socket);

        socket.emit("join", user);

        socket.on("chatJoin", data => {
            setData(data);
            setUser(user);
        });

        socket.on("latestMessages", newData => {
            // console.log('userEntered', newData);
            setData(newData);
        })
    }

    return (
        <>
            <header className={classes.title}>
                <Typography color={"primary"} variant="h4">Awesome Chat</Typography>
            </header>
            <br/>
            <EnterUser userEntered={userEntered}/>
            <ChatRoom user={user} data={data} socket={socket}/>
        </>
    );
}

export default App;
