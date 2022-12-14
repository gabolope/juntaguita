import { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ExpensesListHeader = () => {
    const { totalExpenses, diners, meatTotal, veganTotal, veggieTotal, glutenFreeTotal, meatDinersNumber } = useContext(ExpensesContext)

    return (
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
    )
}

export default ExpensesListHeader