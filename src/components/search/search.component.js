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



//
//
// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
// import {useContext} from "react";
// import {BookstarsContext} from "../../context/bookstars.context";
// import {BookStars_Mock_Data} from "../../constants/mock_data/mock_data";
//
// const filter = createFilterOptions();
//
// export default function SearchComponent() {
//
//     const {characterSearch, setCharSearch} = useContext(BookstarsContext);
//
//
//     const [value, setValue] = React.useState(null);
//     const [open, toggleOpen] = React.useState(false);
//
//
//     return (
//         <React.Fragment>
//             <Autocomplete
//                 // value={value}
//                 // defaultValue=''
//                 onChange={(event, newValue) => {
//                     if (typeof newValue === 'string') {
//                         // timeout to avoid instant validation of the dialog's form.
//                         setTimeout(() => {
//                             toggleOpen(true);
//                         });
//                     } else if (newValue && newValue.inputValue) {
//                         toggleOpen(true);
//                     } else {
//                         setValue(newValue);
//                         setCharSearch(newValue);
//                     }
//                 } }
//
//                 // filterOptions={(options, params) => {
//                 //     const filtered = filter(options, params);
//                 //
//                 //     if (params.inputValue !== '') {
//                 //         filtered.push({
//                 //             inputValue: params.inputValue,
//                 //             firstname: `Add "${params.inputValue}"`,
//                 //         });
//                 //     }
//                 //
//                 //     return filtered;
//                 // }}
//                 id="search"
//                 options={BookStars_Mock_Data}
//                 getOptionLabel={(option) => {
//                     if (typeof option === 'string') {
//                         return option;
//                     }
//                     if (option.inputValue) {
//                         return option.inputValue;
//                     }
//                     return option.firstname + ' ' +option.lastname;
//                 }}
//                 selectOnFocus
//                 clearOnBlur={true}
//                 clearOnEscape={true}
//                 handleHomeEndKeys
//                 renderOption={(props, option) => <li {...props}>{option.firstname + ' ' +option.lastname}</li>}
//                 sx={{ width: 300 }}
//                 // freeSolo
//                 renderInput={(params) => <TextField {...params} label="Search Character" />}
//             />
//         </React.Fragment>
//     );
// }
