import { useState, createContext, useEffect } from "react"

export const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);
    
    const [totalExpenses, setTotalExpenses] = useState(0);
    useEffect(() => {
        let sum = expenses.map(expense => parseInt(expense.total));
        setTotalExpenses(sum.reduce((a, b) => a + b, 0));
    }, [expenses])

    const [buyersList, setBuyersList] = useState([]);
    useEffect(() => { 
        let sortedList = buyersList.sort((a, b) => {return b.buyerTotalExpenses - a.buyerTotalExpenses })
        setBuyersList(sortedList)
    },[buyersList, expenses])


    const [diners, setDiners] = useState(0);
    useEffect(() => {
        let sum = buyersList.length;
        setDiners(sum);
    }, [buyersList])
    
    const [individualTotal, setIndividualTotal] = useState(0);
    useEffect(() => {
        setIndividualTotal(totalExpenses / diners)
    }, [totalExpenses])
    
    class Buyer {
        constructor(name, expenses, buyerTotalExpenses, isVegan, key) {
            this.name = name;
            this.expenses = expenses;
            this.buyerTotalExpenses = buyerTotalExpenses;
            this.isVegan = isVegan;
            this.key = key
        }
    }
        
    const assignExpensesToBuyer = (buyerName, newExpense, isVegan) => {
        let buyerExists = buyersList.some(buyer => buyer.name === buyerName); 
        if (!buyerExists) {
            let key = buyersList.length + 1;
            let newBuyer = new Buyer(buyerName, [newExpense], parseInt(newExpense.total), isVegan, key); 
            console.log(newBuyer)
            let newBuyersList = [...buyersList, newBuyer];
            setBuyersList(newBuyersList)
        } else {
            const buyerExpenses = expenses.filter(expense => expense.buyer === buyerName.toString());
            const newBuyer = buyersList.find(buyer => buyer.name === buyerName);
            newBuyer.expenses = [...buyerExpenses, newExpense];
            newBuyer.buyerTotalExpenses += parseInt(newExpense.total);
        }
    }

    const [expensesExists, setExpensesExists] = useState(false)

    return (
        <ExpensesContext.Provider value={{expenses, setExpenses, totalExpenses, diners, buyersList, assignExpensesToBuyer, expensesExists, setExpensesExists, individualTotal}}>
            {children}
        </ExpensesContext.Provider>
    )
}
