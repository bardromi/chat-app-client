import React from 'react';
import {Grid} from '@material-ui/core';
import MessagesBoard from "./MessagesBoard";
import ChatInput from "./ChatInput";


const ChatRoom = ({user, data, socket}) => {

    return (
        <Grid
            container
            justify="center"
        >
            <Grid item xs={8}>
                <MessagesBoard data={data} user={user}/>
            </Grid>
            <Grid item xs={8}>
                <ChatInput user={user} socket={socket}/>
            </Grid>
        </Grid>
    );
}

export default ChatRoom;