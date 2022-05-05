import { useContext, useState } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const NewExpense = () => {
    const [expenseState, setExpenseState] = useState({
        meat: false,
        vegan: false,
    });
    const handleExpenseChange = (event) => {
        setExpenseState({
        ...expenseState,
        [event.target.name]: event.target.checked,
        });
    };
    const { meat, vegan } = expenseState; 

    const [personState, setPersonState] = useState({
        isVegan: false,
    });
    const handlePersonChange = (event) => {
        setPersonState({
            ...personState,
            [event.target.name]: event.target.checked
        })
    }
    const { isVegan } = personState;

    class Expense {
        constructor(buyer, total, description, meat, vegan, key) {
            this.buyer = buyer;
            this.total = total;
            this.description = description;
            this.meat = meat;
            this.vegan = vegan;
            this.key = key
        }
    };

    const { expenses, setExpenses, assignExpensesToBuyer, setExpensesExists } = useContext(ExpensesContext);     

    const addExpense = () => {
        let buyerName = document.getElementById("buyerName").value;
        let isBuyerVegan = document.getElementById("isVegan").checked;
        let expenseTotal = parseInt(document.getElementById("expenseTotal").value);
        let expenseDescription = document.getElementById("expenseDescription").value;
        let meat = document.getElementById("meat").checked;
        let vegan = document.getElementById("vegan").checked;
        let key = expenses.length + 1;
        let newExpense = new Expense(buyerName, expenseTotal, expenseDescription, meat, vegan, key);
        let newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        assignExpensesToBuyer(buyerName, newExpense, isBuyerVegan);
        setExpensesExists(true);
    }
    

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        p: 2,
                        
                    },
                }}
                >
                <Paper elevation={3} sx={{minWidth: 600}} >
                    <Box sx={{m:1}}>
                        <Stack direction="row" spacing={1}>
                        <TextField id="buyerName" label="Persona" variant="outlined" />
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox checked={isVegan} onChange={handlePersonChange} name="isVegan" id="isVegan"/>
                                }
                                label="Vegan"
                            />
                        </FormGroup>
                    </Stack>
                    </Box>
                    <Box sx={{m:1}}>
                        <Divider variant="middle" sx={{my:1}}/>
                        <Typography variant="h5" gutterBottom component="div">
                            Gastos
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <TextField inputProps={{ inputMode: 'numeric' }} id="expenseTotal" label="Gasto" variant="outlined" />
                            <TextField id="expenseDescription" label="Descripción" variant="outlined" />
                        </Stack>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox checked={meat} onChange={handleExpenseChange} name="meat" id="meat"/>
                                }
                                label="Carne"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={vegan} onChange={handleExpenseChange} name="vegan" id="vegan"/>
                                }
                                label="Vegan"
                            />
                        </FormGroup>
                        <Button variant="contained" onClick={() => addExpense()}>Agregar</Button>
                    </Box>
                    
                </Paper>
            </Box>            
        </>
    )
}

export default NewExpense