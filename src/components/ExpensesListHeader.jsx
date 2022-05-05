import { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ExpensesListHeader = () => {
    const { totalExpenses, diners } = useContext(ExpensesContext)

    return (
        <Stack direction="row" spacing={1}>
            <Typography variant="h5" gutterBottom component="div">
                Total
            </Typography>
            <Chip label={`$${totalExpenses}`} />
            <Typography variant="h5" gutterBottom component="div">
                Comensales
            </Typography>
            <Chip label={`${diners}`} />
        </Stack>
    )
}

export default ExpensesListHeader