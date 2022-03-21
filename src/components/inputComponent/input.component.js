import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputComponent({value, handleChange}) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    label="Comment"
                    id="outlined-size-small"
                    size="small"
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </Box>
    );
}
