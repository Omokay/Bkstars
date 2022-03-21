import {useState, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Navigation from "../../components/navigation/navigation.component";
import CharactersTable from "../../components/characterTable/characterTable.component";
import {BookStars_Mock_Data} from '../../constants/mock_data/mock_data';


const useStyles =  makeStyles((theme) => ({
    wrapper: {
        width: '100vw',
        maxWidth: '1400px',
        height: 'auto',
        padding: '55px 30px 20px 30px',


    },
    header: {
        margin: '20px 0',
    },
    headerText: {
        fontWeight: '700',
        fontSize: '24px',
        textTransform: 'uppercase',
        color: '#185ADB',
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 0,
    }
}));



const Characters = () => {
    const classes = useStyles();

    useEffect(() => {

    })
    return (
       <Navigation>
           <div className={classes.wrapper}>
               <div className={classes.header}>
                   <h2 className={classes.headerText}>
                       Characters
                   </h2>
               </div>
               <CharactersTable characters={BookStars_Mock_Data}/>
           </div>
       </Navigation>
    )
};


export default Characters;



