import { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import ExpensesListHeader from "./ExpensesListHeader"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const listStyle = {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    padding: "3px",
    border: "1px solid black", 
    borderRadius: "3px",
    display: "flex",
    flexDirection: "row"
}
const nameStyle = {
    fontSize: "1.25rem",
    marginTop: "5px",
    marginBottom: "5px"
}

const DinersList = () => { 
    const { buyersList, expensesExists } = useContext(ExpensesContext)

    if (!expensesExists) {
        return (
            <></>
        )
    }

    return (
        <>
            <Paper elevation={3} sx={{ minWidth: 600, m: 1, p: 2 }} >
                <Typography variant="h5" gutterBottom component="div">
                    Lista de deudas
                </Typography>
                
                
                {buyersList.map((row) => (
                    <div key={row.key} style={listStyle} >
                        <div style={nameStyle}>Nombre: {row.name} </div>
                        <div>Aportó: {row.buyerTotalExpenses} </div> 
                        <div>Gastó: {row.debt} </div> 
                        <div>Total: {row.buyerTotalExpenses - row.debt} </div> 
                    </div>          
                ))}
                <ExpensesListHeader />
            </Paper> 
        </>
    )
}

export default DinersList



                           /*  

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
                           
                           <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell align="right">Aportó</TableCell>
                                <TableCell align="right">Gastó</TableCell>
                                <TableCell align="right">Balance Final</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                           
                           <TableBody>
                                <TableRow
                                key={row.key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.buyerTotalExpenses}</TableCell>
                                    <TableCell align="right">{row.debt}</TableCell>
                                    <TableCell align="right">{row.buyerTotalExpenses - row.debt}</TableCell>
                                </TableRow> 
                            </TableBody> */