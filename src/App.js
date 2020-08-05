import React, {useState} from 'react';
import EnterUser from "./Components/EnterUser";
import ChatRoom from "./Components/ChatRoom";
import socketIOClient from "socket.io-client";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import config from './config';
import axios from "axios";

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
    const [usersList, setUsersList] = useState([]);


    const userEntered = (user) => {
        setUser(user);

        let socket = socketIOClient(ENDPOINT);
        setSocket(socket);

        socket.emit("join", user);

        axios.get(`${config.server}/api/users`)
            .then(res => {
                setUsersList(res.data)
            })

        socket.on("chatJoin", data => {
            setData(data.messages);
            setUsersList(data.users);
        });

        socket.on("latestMessages", newData => {
            setData(newData);
        })

        socket.on("leftChat", users => {
            console.log(usersList);
            setUsersList(users);
        })
    }

    return (
        <>
            <header className={classes.title}>
                <Typography color={"primary"} variant="h4">Awesome Chat</Typography>
            </header>
            <br/>
            <EnterUser userEntered={userEntered}/>
            <ChatRoom user={user} users={usersList} data={data} socket={socket}/>
        </>
    );
}

export default App;
