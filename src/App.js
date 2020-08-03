import React, {useState} from 'react';
import EnterUser from "./Components/EnterUser";
import ChatRoom from "./Components/ChatRoom";
import socketIOClient from "socket.io-client";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const ENDPOINT = "http://localhost:3000";

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
    },
}));

const App = () => {
    const classes = useStyles();

    const [socket, setSocket] = useState(null);
    const [data, setData] = useState([]);


    const userEntered = (user) => {
        let socket = socketIOClient(ENDPOINT);
        setSocket(socket);

        socket.emit("join", user);

        socket.on("chatJoin", data => {
            setData(data);
        });

        socket.on("latestMessages", newData => {
            setData(newData);
        })
    }

    const newMessage = () => {
        socket.on("latestMessages", newData => {
            console.log(newData);
            setData([...data, newData]);
        })
    }

    return (
        <>
            <header className={classes.title}>
                <Typography color={"primary"} variant="h4">Awesome Chat</Typography>
            </header>
            <br/>
            <EnterUser userEntered={userEntered}/>
            <ChatRoom data={data} socket={socket} newMessage={newMessage}/>
        </>
    );
}

export default App;