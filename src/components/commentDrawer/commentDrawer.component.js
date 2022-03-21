import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CommentList from "../commentList/commentList.component";


export default function CommentsDrawer({comments, isOpen, setOpen}) {
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            // return;
        }

        setOpen(!isOpen);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
            role="presentation"

        >
            <CommentList comments={comments}/>
        </Box>
    );

    return (
        <div>
                <React.Fragment key={'right'}>
                    <SwipeableDrawer
                        anchor='right'
                        open={isOpen}
                        onClose={toggleDrawer('right', false)}
                        onOpen={toggleDrawer('right', true)}
                    >
                        {list('right')}
                    </SwipeableDrawer>
                </React.Fragment>
        </div>
    );
}
