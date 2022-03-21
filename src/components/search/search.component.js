import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {useContext} from "react";
import {BookstarsContext} from "../../context/bookstars.context";
import {BookStars_Mock_Data} from "../../constants/mock_data/mock_data";

const filter = createFilterOptions();

export default function SearchComponent() {

    const {characterSearch, setCharSearch} = useContext(BookstarsContext);


    const [value, setValue] = React.useState(null);
    const [open, toggleOpen] = React.useState(false);

    const handleClose = () => {
        setDialogValue({
            firstname: '',
        });

        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = React.useState({
        firstname: '',
    });


    return (
        <React.Fragment>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        // timeout to avoid instant validation of the dialog's form.
                        setTimeout(() => {
                            toggleOpen(true);
                            setDialogValue({
                                firstname: newValue,
                            });
                        });
                    } else if (newValue && newValue.inputValue) {
                        toggleOpen(true);
                        setDialogValue({
                            firstname: newValue.inputValue,
                        });
                    } else {
                        setValue(newValue);
                        setCharSearch(newValue);
                    }
                } }

                filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    if (params.inputValue !== '') {
                        filtered.push({
                            inputValue: params.inputValue,
                            firstname: `Add "${params.inputValue}"`,
                        });
                    }

                    return filtered;
                }}
                id="search"
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
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(props, option) => <li {...props}>{option.firstname}</li>}
                sx={{ width: 300 }}
                freeSolo
                renderInput={(params) => <TextField {...params} label="Search Character" />}
            />
        </React.Fragment>
    );
}
