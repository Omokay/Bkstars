import {makeStyles} from "@material-ui/core/styles";


const useStyles =  makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: '#185ADB',
        borderRadius: '8px',
        margin: '5px 0',

    },
    text: {
        color: '#eef2fa',
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }


}));


const CustomButton = ({name, handleClick}) => {
    const classes = useStyles();
    return (
        <div onClick={handleClick} className={classes.container}>
            <div className={classes.text}>
                {name}
            </div>
        </div>
    )
};

export default CustomButton;

