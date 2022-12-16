import { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Stack } from "@mui/material";

const totalStyle = {
    backgroundColor: "#68B984",
    fontWeight: "bold",
    maxWidth: "200px",
    padding: "2px",
    paddingLeft: "15px",
    border: "2px solid black",
    borderRadius: "20px"
}

const totalStyle2 = {
    backgroundColor: "#FF1E1E",
    fontWeight: "bold",
    maxWidth: "200px",
    padding: "2px",
    paddingLeft: "15px",
    border: "2px solid black",
    borderRadius: "20px"
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
                {buyersList.map(buyer => {
                    return (
                        <Card key={buyer.key} sx={{ minWidth: 275, mb: 1 }}>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ mb: 1.5}} >
                                    {buyer.name}
                                </Typography>
                                <Stack direction="row" spacing={2} sx={{mb:"10px"}}>
                                    <AddCircleOutlineIcon color="#68B984"/>
                                    <Typography sx={{ mb: 1 }} color="text.primary">
                                        Aportó: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(buyer.buyerTotalExpenses) }
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={2} sx={{mb:"10px"}}>
                                    <RemoveCircleOutlineIcon />
                                    <Typography sx={{ mb: 1 }} color="text.primary">
                                        Consumió: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(buyer.debt) }
                                    </Typography>

                                </Stack>
                                <Divider  />
                                <Typography variant="h6" sx={{ mt: 1 }} style={((buyer.buyerTotalExpenses - buyer.debt) >= 0) ? totalStyle : totalStyle2}>
                                    Total: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(buyer.buyerTotalExpenses - buyer.debt) }
                                </Typography>
                            </CardContent>
                        </Card>   )   
                })}
            </Paper> 
        </>
    )
}

export default DinersList