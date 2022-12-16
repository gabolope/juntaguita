import { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ExpensesListHeader = () => {
    const { totalExpenses, diners, meatTotal, veganTotal, veggieTotal, glutenFreeTotal, meatDinersNumber, generalTotal, generalIndividual, meatDiners, meatIndividual, veggieDiners, veganIndividual, veganDiners, glutenFreeIndividual, glutenFreeDiners} = useContext(ExpensesContext)

    return (
        <>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Comensales</TableCell>
                <TableCell align="right">Individual</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        General
                    </TableCell>
                            <TableCell align="right">{ generalTotal }</TableCell>
                            <TableCell align="right">{ diners }</TableCell>
                            <TableCell align="right">{ generalIndividual}</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        Carne
                    </TableCell>
                            <TableCell align="right">{ meatTotal }</TableCell>
                            <TableCell align="right">{ meatDiners }</TableCell>
                            <TableCell align="right">{ meatIndividual}</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        Vegetariano
                    </TableCell>
                            <TableCell align="right">{ veggieTotal }</TableCell>
                            <TableCell align="right">{ veggieDiners }</TableCell>
                            <TableCell align="right">{ veganIndividual}</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        Vegano
                    </TableCell>
                            <TableCell align="right">{ veganTotal }</TableCell>
                            <TableCell align="right">{ veganDiners }</TableCell>
                            <TableCell align="right">{ veganIndividual}</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        Libre de gluten
                    </TableCell>
                            <TableCell align="right">{ glutenFreeTotal }</TableCell>
                            <TableCell align="right">{ glutenFreeDiners }</TableCell>
                            <TableCell align="right">{ glutenFreeIndividual}</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>    
        <Stack direction="row" spacing={2}>
            <Typography variant="h5" gutterBottom component="div">
                Total
            </Typography>
            <Chip label={`$${totalExpenses}`} />
            <Typography variant="h5" gutterBottom component="div">
                Gastos de carne
            </Typography>
            <Chip label={`$${meatTotal}`} />
            <Typography variant="h5" gutterBottom component="div">
                Gastos veganos
            </Typography>
            <Chip label={`$${veganTotal}`} />
            <Typography variant="h5" gutterBottom component="div">
                Gastos vegetarianos
            </Typography>
            <Chip label={`$${veggieTotal}`} />
            <Typography variant="h5" gutterBottom component="div">
                Gastos libre de gluten
            </Typography>
            <Chip label={`$${glutenFreeTotal}`} />
            <Typography variant="h5" gutterBottom component="div">
                Comensales
            </Typography>
            <Chip label={`${diners}`} />
            <Typography variant="h5" gutterBottom component="div">
                Comensales de carne
            </Typography>
            <Chip label={`${meatDinersNumber}`} />
        </Stack>
        </>
    )
}

export default ExpensesListHeader