import { List, ListItem, ListItemButton, ListItemText } from '@material-ui/core';

const ListChat = ({ chatList }) => {
    return (
        <List>
            {chatList.map((obj) => (
                
                <ListItem key={obj.id}>
                    <ListItemButton>
                        <ListItemText primary={ obj.name } />
                    </ListItemButton>
                </ListItem>

            ))}
        </List>
    )
};

export default ListChat;
