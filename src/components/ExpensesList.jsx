import { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


import Paper from '@mui/material/Paper';

const ExpensesList = () => {
    const { buyersList, expensesExists, } = useContext(ExpensesContext); 

    if (!expensesExists) {
        return (
            <></>
        )
    }
    return (
        <>
            <Paper elevation={3} sx={{ minWidth: 600, m:1, p: 2 }} >
                <Typography gutterBottom variant="h5" component="div">
                    Listado de compras: 
                </Typography>
                
                {buyersList.map(buyer => {
                    return (
                        <Box sx={{ width: '100%', bgcolor: 'background.paper' }} key={buyer.key}>
                            <Box sx={{ my: 3, mx: 2 }}>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item >
                                        <Typography gutterBottom variant="h5" component="div">
                                            {buyer.name}
                                        </Typography>
                                            <Typography > Consume: </Typography>
                                    </Grid>
                                    <Grid item xs >
                                            <Chip label="General" variant="filled" sx={{fontWeight:"bold", mx:"3px"}}/>
                                        {buyer.isMeat ?
                                            <Chip label="Carne" variant="filled" sx={{backgroundColor:"red", fontWeight:"bold", mx:"3px"}}/> : <div></div>
                                        }
                                        {buyer.isVeggie ? 
                                            <Chip label="Veggie" variant="filled" sx={{backgroundColor:"limeGreen", fontWeight:"bold", mx:"3px"}}/> : <div></div>
                                        }
                                        {buyer.isVegan ? 
                                            <Chip label="Vegan" variant="filled" sx={{backgroundColor:"green", fontWeight:"bold", mx:"3px"}}/> : <div></div>
                                        }
                                        {buyer.isGlutenFree ? 
                                            <Chip label="Gluten Free" variant="filled" sx={{backgroundColor:"orange", fontWeight:"bold", mx:"3px"}}/> : <div></div>
                                        }

                                    </Grid>
                                    <Grid item>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Aportó: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(buyer.buyerTotalExpenses) }
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Divider variant="middle" />
                            {buyer.expenses.map(expense => {                            
                                return (
                                    <ListItem key={expense.key}>
                                        <ListItemAvatar>
                                            {(expense.type === "meat") ? <Avatar src="./assets/icons/meat.png"> </Avatar> : (expense.type === "vegan") ? <Avatar src="./assets/icons/vegan.png"> </Avatar> : (expense.type === "veggie") ? <Avatar src="./assets/icons/veggie.png"> </Avatar> : (expense.type === "glutenFree") ? <Avatar src="./assets/icons/glutenFree.png"> </Avatar> : <Avatar src="./assets/icons/general.png"> </Avatar>}
                                        </ListItemAvatar>
                                        <ListItemText primary={expense.total} secondary={expense.description} />
                                    </ListItem>
                                )})
                            }
                        </Box>
                    )
                })}
            </Paper>
            
        </>
    )
}

export default ExpensesList