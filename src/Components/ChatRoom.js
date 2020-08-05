import React from 'react';
import {Grid} from '@material-ui/core';
import MessagesBoard from "./MessagesBoard";
import ChatInput from "./ChatInput";
import UsersList from './UesrsList';

const ChatRoom = ({user, users, data, socket}) => {

    return (
        <Grid
            container
            justify="center"
            spacing={1}
        >
            <Grid item xs={2}>
                <UsersList users={users}/>
            </Grid>
            <Grid item xs={6}>
                <MessagesBoard data={data} user={user}/>
            </Grid>
            <Grid item xs={8}>
                <ChatInput user={user} socket={socket}/>
            </Grid>
        </Grid>
    );
}

export default ChatRoom;