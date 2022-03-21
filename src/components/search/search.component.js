import React, {useEffect, useContext} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {BookStars_Mock_Data} from "../../constants/mock_data/mock_data";
import {BookstarsContext} from "../../context/bookstars.context";

export default function SearchComponent() {
    const [value, setValue] = React.useState('');
    const {setCharSearch} = useContext(BookstarsContext);

    useEffect(() => {
        if (value === '') {
            setCharSearch([]);
        }
    }, [value])
    return (
        <Autocomplete
            // disablePortal
            id="combo-box-demo"
            options={BookStars_Mock_Data}
            getOptionLabel={(option) => {
            if (typeof option === 'string') {
                return option;
            }
            if (option.inputValue) {
                return option.inputValue;
            }
            return option.firstname + ' ' +option.lastname;
        }}
            value={value}
            onInputChange={(event, newInputValue, reason) => {
                if (reason === 'clear') {
                    setValue('')
                    setCharSearch('');

                } else {
                    setValue('')
                    setCharSearch('');
                }
            }}
            onChange={(event, newValue) => {
                setValue(newValue);
                setCharSearch(newValue);
            }}
            sx={{ width: 300 }}
            // onChange={(event, newValue) => setValue(newValue)}
           renderOption={(props, option) => <li {...props}>{option.firstname + ' ' +option.lastname}</li>}
           renderInput={(params) => <TextField {...params} label="Search Character" />}
        />
    );
}
