import {useContext, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import EpisodeCard from "../../components/episodeCard/episodeCard.component";
import SearchComponent from "../../components/search/search.component";
import { BookstarsContext } from '../../context/bookstars.context';


const useStyles =  makeStyles((theme) => ({
    wrapper: {
        maxWidth: '1100px',
        height: 'auto',
        padding: '55px 30px 20px 30px',
        display: 'flex',
        flexDirection: 'column',

    },
    header: {
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '916px',

        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
        },
    },
    headerText: {
        fontWeight: '700',
        fontSize: '24px',
        textTransform: 'uppercase',
        color: '#185ADB',
    },
    content: {
        width: '100%',
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        margin: 0,
        padding: 0,

    },
    searchComponent: {
        // [theme.breakpoints.down('xs')]: {
        //     display: 'none',
        // },
    },


}));


const Episodes = ({data}) => {
    const classes = useStyles();
    const {
        characterSearch, setCharSearch,
        filteredEpisodes, setFilteredEpisodes
    } = useContext(BookstarsContext);
    // Get Search object from search input and pass values to filtered array of episodes
    useEffect (() => {
        if (characterSearch === null || characterSearch === undefined) return;
        setFilteredEpisodes(characterSearch.episodes);
    }, [characterSearch, filteredEpisodes,  setCharSearch]);

    const dataToDisplay = (filteredEpisodes && filteredEpisodes) ? filteredEpisodes : data;

    // console.log(dataToDisplay);
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <h2 className={classes.headerText}>
                    Episodes
                </h2>
                <div className={classes.searchComponent}>
                    <SearchComponent/>
                </div>
            </div>
            <div className={classes.content}>
                {
                    (dataToDisplay && dataToDisplay).map((details, index) => {
                        return (
                            <EpisodeCard key={index} details={details}/>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Episodes;

