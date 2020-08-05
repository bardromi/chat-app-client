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
            <Grid item sm={2} xs={12}>
                <UsersList users={users}/>
            </Grid>
            <Grid item sm={6} xs={12}>
                <MessagesBoard data={data} user={user}/>
            </Grid>
            <Grid item sm={8} xs={12}>
                <ChatInput user={user} socket={socket}/>
            </Grid>
        </Grid>
    );
}

export default ChatRoom;