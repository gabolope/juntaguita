import { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import ExpensesListHeader from "./ExpensesListHeader"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const DinersList = () => { 
    const { buyersList, individualTotal, expensesExists } = useContext(ExpensesContext)

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
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell align="right">Aportó</TableCell>
                                <TableCell align="right">Gastó</TableCell>
                                <TableCell align="right">Balance</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {buyersList.map((row) => (
                                <TableRow
                                key={row.key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.buyerTotalExpenses}</TableCell>
                                    <TableCell align="right">{individualTotal}</TableCell>
                                    <TableCell align="right">{row.buyerTotalExpenses - individualTotal}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <ExpensesListHeader />
            </Paper> 
        </>
    )
}

export default DinersList