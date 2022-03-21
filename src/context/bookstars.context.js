import React, { createContext, useState } from 'react';
export const BookstarsContext = createContext(null);

const BookstarsContextProvider = ({ children }) => {
    const [characterSearch, setCharSearch] = useState('');
    const [filteredEpisodes, setFilteredEpisodes] = useState([]);





    return (
        <BookstarsContext.Provider
            value={{
                characterSearch, setCharSearch,
                filteredEpisodes, setFilteredEpisodes
            }}
        >
            {children}
        </BookstarsContext.Provider>
    )

};

export default BookstarsContextProvider;
