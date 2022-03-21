import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles({
    root: {
        '& .MuiTableRow-root': {
            transition: '0.5s ease',
            '&:hover': {
                boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
            }
        },

        '& .MuiTableRow-root td:first-child': {
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px',


        },

        '& .MuiTableRow-root td:last-child': {
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
        },
    },

    table: {
        borderCollapse: 'separate',
        borderSpacing: '0 15px',
    },
    genderColumn: {
        maxWidth: '100px',
        minWidth: '88px',
        height: '30px',
        borderRadius: '8px',
        padding: '3px 5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    moreIcon: {
        cursor: 'pointer',

    },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#E5E5E5',
        color: '#0A1931',
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        border: 'none',
        backgroundColor: '#FFFFFF',
        color: '#0A1931',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#FFFFFF',
        border: 'none',

    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 'none',

    },

    '&:first-child td': {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },

    '&:last-child td': {
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
    },
}));



const CharactersTable = ({characters}) => {
    console.log(characters);
    const classes = useStyles();

    // const openEpisodes = () => {
    //     console.log('Open the episodes');
    // }
    return (
        <TableContainer >
            <Table className={classes.root}   sx={{ minWidth: 600, borderCollapse: 'separate', borderSpacing: '0 15px', }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                        <StyledTableCell align="left">First Name</StyledTableCell>
                        <StyledTableCell align="left">Last Name</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                        <StyledTableCell align="left">Gender</StyledTableCell>
                        <StyledTableCell align="left">State</StyledTableCell>
                        <StyledTableCell align="left">Location</StyledTableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        characters.map((row, index) => {
                            return (
                                (
                                    <TableRow key={index}>
                                        <StyledTableCell align="left">&nbsp;&nbsp;&nbsp;&nbsp;</StyledTableCell>
                                        <StyledTableCell align="left">{row.firstname}</StyledTableCell>
                                        <StyledTableCell align="left">{row.lastname}</StyledTableCell>
                                        <StyledTableCell align="left">{row.status}</StyledTableCell>

                                        <StyledTableCell align="left">
                                            <div
                                                style={{
                                                    backgroundColor: (row.gender === 'Male') ? 'rgba(91, 147, 255, 0.1)' : 'rgba(255, 143, 107, 0.1)',
                                                    color: (row.gender === 'Male') ? 'rgba(91, 147, 255, 1)' : 'rgba(255, 143, 107, 1)',


                                                }}
                                                className={classes.genderColumn}>
                                                {row.gender}
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.stateOfOrigin}</StyledTableCell>
                                        <StyledTableCell align="left">{row.location.name}</StyledTableCell>
                                    </TableRow>


                                )
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CharactersTable;