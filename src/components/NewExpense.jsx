import { useContext, useState } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const NewExpense = () => {
    
    // handleChange de buyer:
    const [personState, setPersonState] = useState({
        isMeat: false,
        isVegan: false,
        isVeggie: false,
        isGlutenFree: false
    });
    const handleMeatChange = (event) => {
        setPersonState({
            ...personState,
            [event.target.name]: event.target.checked
        })
    }
    const handleVeganChange = (event) => {
        setPersonState({
            ...personState,
            [event.target.name]: event.target.checked
        })
    }
    const handleVeggieChange = (event) => {
        setPersonState({
            ...personState,
            [event.target.name]: event.target.checked
        })
    }
    const handleGlutenFreeChange = (event) => {
        setPersonState({
            ...personState,
            [event.target.name]: event.target.checked
        })
    }
    const { isMeat, isVegan, isVeggie, isGlutenFree } = personState;

    // handle de item
    const [foodState, setFoodState] = useState({
        selected: "general"
    })
    const handleFoodChange = (ev) => {
        setFoodState({selected: ev.target.value})
    }
    const { selected } = foodState;

    class Expense {
        constructor(buyer, total, description, type, key) {
            this.buyer = buyer;
            this.total = total;
            this.description = description;
            this.type = type;
            this.key = key
        }
    };

    const { expenses, setExpenses, assignExpensesToBuyer, setExpensesExists } = useContext(ExpensesContext);

    const addExpense = () => {
        let buyerName = document.getElementById("buyerName").value;
        let isBuyerMeat = document.getElementById("isMeat").checked;
        let isBuyerVegan = document.getElementById("isVegan").checked;
        let isBuyerVeggie = document.getElementById("isVeggie").checked;
        let isBuyerGlutenFree = document.getElementById("isGlutenFree").checked;
        let expenseTotal = parseInt(document.getElementById("expenseTotal").value);
        let expenseDescription = document.getElementById("expenseDescription").value;
        let type = foodState.selected;
        let key = expenses.length + 1;
        let newExpense = new Expense(buyerName, expenseTotal, expenseDescription, type, key);
        let newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        assignExpensesToBuyer(buyerName, newExpense, isBuyerMeat, isBuyerVegan, isBuyerVeggie, isBuyerGlutenFree);
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
                                <Checkbox checked={isMeat} onChange={handleMeatChange} name="isMeat" id="isMeat"/>
                                }
                                label="Carne"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={isVegan} onChange={handleVeganChange} name="isVegan" id="isVegan"/>
                                }
                                label="Vegan"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={isVeggie} onChange={handleVeggieChange} name="isVeggie" id="isVeggie"/>
                                }
                                label="Vegetariano"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={isGlutenFree} onChange={handleGlutenFreeChange} name="isGlutenFree" id="isGlutenFree"/>
                                }
                                label="Celíaco"
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
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Tipo:</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={handleFoodChange}
                                value={selected}
                            >
                                <FormControlLabel value="general" control={<Radio />} label="General"/>
                                <FormControlLabel value="meat" control={<Radio />} label="Carne"/>
                                <FormControlLabel value="veggie" control={<Radio />} label="Vegetariano"/>
                                <FormControlLabel value="vegan" control={<Radio />} label="Vegano"/>
                                <FormControlLabel value="glutenFree" control={<Radio />} label="Libre de Gluten"/>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Button variant="contained" onClick={() => addExpense()}>Agregar</Button> 
                </Paper>
            </Box>            
        </>
    )
}

export default NewExpense