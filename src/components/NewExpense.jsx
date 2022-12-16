import { useContext, useState } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
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
        let expenseTotal = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(parseInt(document.getElementById("expenseTotal").value));
        let expenseDescription = document.getElementById("expenseDescription").value;
        let type = foodState.selected;
        let key = expenses.length + 1;
        let newExpense = new Expense(buyerName, expenseTotal, expenseDescription, type, key);
        let newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        assignExpensesToBuyer(buyerName, newExpense, isBuyerMeat, isBuyerVegan, isBuyerVeggie, isBuyerGlutenFree);
        setExpensesExists(true);
    }
    
    // Habilita el botón de "Agregar" cuando se llenan los 3 campos del formulario:
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const changeName = () => {setName(document.getElementById("buyerName").value)}
    const changeDescription = () => {setDescription(document.getElementById("expenseDescription").value)}
    const changePrice = () => {setPrice(document.getElementById("expenseTotal").value)}



    //CSS:

    const nameInput = {
        fontSize: "1.25rem",
        minWidth: "550px",
        minHeight: "35px",
        border: "2px black solid",
        borderRadius: "3px"
    }

    const dietTitle = {
        fontFamily: "Rotobo, Helvetica, Arial, sans-serif",
        fontSize: "1.15rem",
        fontStyle: "italic",
        margin: "10px 0 5px 0"
    }

    const productInput = {
        fontSize: "1.25rem",
        minWidth: "250px",
        minHeight: "35px",
        border: "2px black solid",
        borderRadius: "3px",
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
                        <input id="buyerName" type="text"  onChange={()=> changeName()}  placeholder="Persona" style={nameInput}/>
                        <FormGroup>
                            <div style={dietTitle}>
                                Tipos de alimentos que consume {name}
                            </div>
                            <Stack direction="row" spacing={1}>
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
                                    label="Vegano"
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
                                    label="Sin gluten"
                                />
                            </Stack>
                        </FormGroup>
                    </Box>
                    <Box sx={{m:1}}>
                        <Divider variant="middle" sx={{ my: 1 }} />
                        {
                            name ?
                                <Typography variant="h6" gutterBottom component="div">
                                    Agregar compras de {name}
                                </Typography>
                                :
                                <Typography variant="h6" gutterBottom component="div">
                                    Agregar compras
                                </Typography>
                        }
                        
                        <Stack direction="row" spacing={1}>
                            <input id="expenseDescription" type="text" placeholder="Descripción" onChange={()=> changeDescription()} style={productInput}></input>
                            <input id="expenseTotal" type="number" placeholder="Precio" min="1" onChange={()=> changePrice()} style={productInput}></input>
                        </Stack>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mt: 1 }}>Tipo de compra:</FormLabel>
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
                    {
                        (name && description && price) ? 
                            <Button variant="contained" onClick={() => addExpense()}>Agregar</Button> 
                            :
                            <Button variant="contained" disabled>Agregar</Button> 
                    }
                </Paper>
            </Box>            
        </>
    )
}

export default NewExpense

