import { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Paper from '@mui/material/Paper';

const ExpensesList = () => {
    const { expenses, buyersList, expensesExists, } = useContext(ExpensesContext); 

    if (!expensesExists) {
        return (
            <></>
        )
    }
    return (
        <>
            <Paper elevation={3} sx={{ minWidth: 600, m:1, p: 2 }} >
                <Typography gutterBottom variant="h5" component="div">
                    ¿Quiénes compraron?
                </Typography>
                
                {buyersList.map(buyer => {
                    return (
                        <Box sx={{ width: '100%', bgcolor: 'background.paper' }} key={buyer.key}>
                            <Box sx={{ my: 3, mx: 2 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {buyer.name}
                                        </Typography>
                                        {buyer.isMeat ?
                                            <Chip label="Carne" variant="filled"/> : <div></div>
                                        }
                                        {buyer.isVeggie ? 
                                            <Chip label="Veggie" variant="filled"/> : <div></div>
                                        }
                                        {buyer.isVegan ? 
                                            <Chip label="Vegan" variant="filled"/> : <div></div>
                                        }
                                        {buyer.isGlutenFree ? 
                                            <Chip label="Gluten Free" variant="filled"/> : <div></div>
                                        }
                                    </Grid>
                                    <Grid item>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Aportó: ${buyer.buyerTotalExpenses}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Divider variant="middle" />
                            {buyer.expenses.map(expense => {                            
                                return (
                                    <ListItem key={expense.key}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={expense.total} secondary={expense.description} />
                                    </ListItem>
                                )})
                            }
                            {/* <Box sx={{ m: 2 }}>
                                <Typography gutterBottom variant="body1">
                                    Select type
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="Extra Soft" />
                                    <Chip color="primary" label="Soft" />
                                    <Chip label="Medium" />
                                    <Chip label="Hard" />
                                </Stack>
                            </Box>
                            <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                                <Button>Add to cart</Button>
                            </Box> */}
                        </Box>
                    )
                })}
                {expensesExists ? 
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Todas los compras</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {expenses.map(expense => {
                            return (
                                <ListItem key={expense.key}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={expense.total} secondary={expense.buyer} />
                                </ListItem>
                            )})
                        }
                    </List>
                        </AccordionDetails>
                    </Accordion> :
                    <div></div>
                }
            </Paper>
            
        </>
    )
}

export default ExpensesList