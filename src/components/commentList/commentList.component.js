import {useState, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import InputComponent from "../inputComponent/input.component";
import CustomButton from "../customButton/customButton.component";
import {EpisodesData} from "../../constants/mock_data/mock_data";

const useStyles =  makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        height: 'auto',
        minHeight: '100vh',
        padding: '20px 10px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        margin: '20px 0',
        width: '100%',
    },
    headerText: {
        fontWeight: '700',
        fontSize: '24px',
        textTransform: 'uppercase',
        color: '#185ADB',
    },
    list: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
    },
    commentTile: {
        borderRadius: '8px',
        border: '1px solid #FFC947',
        padding: '25px',
        margin: '5px 0',
    },
    comment: {
        fontSize: '16px',
        color: '#0A1931',
        margin: '5px 0 10px 0',
    },
    commenter: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#FFC947',
        margin: '5px 0',

    },
    date_commented: {
        fontSize: '16px',
        color: '#0A1931',
        margin: '5px 0',

    },

    flex: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    addComment: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
}));


const CommentList = ({comments}) => {
    const classes = useStyles();

    const [commentList, setCommentList] = useState([]);
    const  [newComment, setNewComment] = useState('');

    useEffect(() => {
        getCommentList();
    }, [comments]);


    const getCommentList = () => {
        EpisodesData.filter((comment) => {
            if (comment.id === comments) {
                setCommentList(comment.episodeComments);
            }
        })
    }

    const handleChange = (event) => {
        setNewComment(event.target.value);
    }

    const addComment = (message) => {
        if (message.length) {
            const currentDate = new Date().toDateString();
            const ipAddress = '172.0.0.1';

           EpisodesData.forEach((episode) => {

               if (episode.id === comments) {
                   episode.episodeComments.unshift({
                       comment: message,
                       ipAddressLocation: ipAddress,
                       created: currentDate,
                   });
                   episode.episodeCount += 1;

               }
           })
        }
        setNewComment('');
    }

    return (
        <div className={classes.wrapper}>
           <div>
               <div className={classes.header}>
                   <h2 className={classes.headerText}>
                       Comments
                   </h2>
               </div>
               {
                   (commentList && commentList).map((comment, index) => (
                       <div key={index} className={classes.list}>
                           <div className={classes.commentTile}>
                               <p className={classes.comment}>
                                   {comment.comment}
                               </p>
                               <div className={classes.flex}>
                                   <p className={classes.commenter}>
                                       IP: {comment.ipAddressLocation}
                                   </p>
                                   <p className={classes.date_commented}>
                                       Commented: {comment.created}
                                   </p>
                               </div>
                           </div>
                       </div>
                   ))
               }
           </div>
            <div className={classes.addComment}>
                <InputComponent handleChange={handleChange}/>
                <CustomButton handleClick={() => addComment(newComment)} name='Add Comment'/>
            </div>
        </div>
    )
};

export default CommentList;

