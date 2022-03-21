import {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CommentsDrawer from "../commentDrawer/commentDrawer.component";



const useStyles =  makeStyles((theme) => ({
    wrapper: {
        width: '300px',
        height: '300px',
        background: '#ffffff',
        borderRadius: '8px',

        padding: '20px',
        margin: '0 0 8px 8px',
        transition: '1 ease-in',

        '&:hover': {
            boxShadow: '0px 1px 5px 0px rgba(214,213,210,1)',
        }
    },
    details: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    name: {
      margin: 0,
      // textTransform: 'uppercase',
        color: '#185ADB',
        fontWeight: 'bold',
      fontSize: '24px',
    },
    code: {
        margin: 0,
        color: '#0A1931',
        fontSize: '16px',
        fontWeight: 'bold',


    },
    extra: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0',
    },
    releaseDate: {
        width: 'max-content',
        display: 'flex',
        alignItems: 'center',

    },
    comments: {
        width: '40px',
        height: '60px',
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
    },
    icon: {
        width: '90%',
        height: '100%',
        margin: 0,
    },
    row: {
        margin: '0 0 20px 0',
    },
    commentsCount: {
        margin: 0,
        color: '#FFC947',
    },

    released: {
        color: '#5f646b',
        fontWeight: 'bold',
        fontSize: '14px',


    },
    dateValue: {
        color: '#5f646b',
        fontWeight: 'bold',
    },

}));


const EpisodeCard = ({details}) => {
    const classes = useStyles();


    const {id, name, episodeCode, releaseDate, episodeCount} = details;
    const [isOpen, setOpen] = useState(false);

    const openComments = () => {
        setOpen(!isOpen);
    }
    return (
        <div className={classes.wrapper}>
            <CommentsDrawer comments={id} isOpen={isOpen} setOpen={setOpen} />
            <div className={classes.details}>
               <div className={classes.row}>
                   <h3 className={classes.name}>
                       {name}
                   </h3>
                   <p className={classes.code}>
                       {episodeCode}
                   </p>
               </div>

                <div className={classes.extra}>
                    <div className={classes.releaseDate}>
                        <p className={classes.released}>Released: <span className={classes.dateValue}>{releaseDate}</span> </p>
                    </div>
                    <div className={classes.comments} onClick={() => openComments(id)}>
                        <QuestionAnswerIcon sx={{width: '30px', height: '30px', color: '#FFC947',}} />
                        <p className={classes.commentsCount}>
                            {episodeCount}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EpisodeCard;

