import { useState, createContext, useEffect } from "react"

export const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);
    
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [generalTotal, setGeneralTotal] = useState(0);
    const [meatTotal, setMeatTotal] = useState(0);
    const [veganTotal, setVeganTotal] = useState(0);
    const [veggieTotal, setVeggieTotal] = useState(0);
    const [glutenFreeTotal, setGlutenFreeTotal] = useState(0);
    const [buyersList, setBuyersList] = useState([]);

    const [individualTotal, setIndividualTotal] = useState(0);

    const [generalIndividual, setGeneralIndividual] = useState(0);
    const [meatIndividual, setMeatIndividual] = useState(0);
    const [veganIndividual, setVeganIndividual] = useState(0);
    const [veggieIndividual, setVeggieIndividual] = useState(0);
    const [glutenFreeIndividual, setGlutenFreeIndividual] = useState(0);
    
    const [diners, setDiners] = useState(0);
    const [meatDiners, setMeatDiners] = useState([]);
    const [veggieDiners, setVeggieDiners] = useState([]);
    const [veganDiners, setVeganDiners] = useState([]);
    const [glutenFreeDiners, setGlutenFreeDiners] = useState([]);

    const [meatDinersNumber, setMeatDinersNumber] = useState(0);
    const [veggieDinersNumber, setVeggieDinersNumber] = useState(0);
    const [veganDinersNumber, setVeganDinersNumber] = useState(0);
    const [glutenFreeDinersNumber, setGlutenFreeDinersNumber] = useState(0);


    useEffect(() => {
        //1era parte suma todos los gastos:
        let sum = expenses.map(expense => parseInt(expense.total));
        setTotalExpenses(sum.reduce((a, b) => a + b, 0)); 
        //2nda parte suma los gastos de carne:
        const generalExpenses = expenses.filter(expense => expense.type === "general");
        let generalSum = generalExpenses.map(expense => parseInt(expense.total));
        setGeneralTotal(generalSum.reduce((a, b) => a + b, 0));
        //3era parte suma los gastos de carne:
        const meatExpenses = expenses.filter(expense => expense.type === "meat");
        let meatSum = meatExpenses.map(expense => parseInt(expense.total));
        setMeatTotal(meatSum.reduce((a, b) => a + b, 0));
        //4ta parte suma los gastos veganos:
        const veganExpenses = expenses.filter(expense => expense.type === "vegan");
        let veganSum = veganExpenses.map(expense => parseInt(expense.total));
        setVeganTotal(veganSum.reduce((a, b) => a + b, 0));
        //5ta parte suma los gastos veggie:
        const veggieExpenses = expenses.filter(expense => expense.type === "veggie");
        let veggieSum = veggieExpenses.map(expense => parseInt(expense.total));
        setVeggieTotal(veggieSum.reduce((a, b) => a + b, 0));
        //6ta parte suma los gastos celiacos:
        const GlutenFreeExpenses = expenses.filter(expense => expense.type === "glutenFree");
        let GlutenFreeSum = GlutenFreeExpenses.map(expense => parseInt(expense.total));
        setGlutenFreeTotal(GlutenFreeSum.reduce((a, b) => a + b, 0));
        //7ima parte ordena a los compradores según lo que gastó cada uno: 
        let sortedList = buyersList.sort((a, b) => { return b.buyerTotalExpenses - a.buyerTotalExpenses })
        setBuyersList(sortedList);
        
    }, [expenses, generalIndividual, glutenFreeIndividual, meatIndividual, veganIndividual, veggieIndividual, buyersList]);

    useEffect(() => {
        //8ava parte reparte los gastos dependiendo de lo que consumió cada comprador:
        let newBuyersList = buyersList.map(buyer => {
            const { isMeat, isVegan, isVeggie, isGlutenFree } = buyer;
            //INDIVIDUALES
            if (isMeat && !isVegan && !isVeggie && !isGlutenFree) return { ...buyer, debt: generalIndividual + meatIndividual };
            else if (!isMeat && isVegan && !isVeggie && !isGlutenFree) return { ...buyer, debt: generalIndividual + veganIndividual };
            else if (!isMeat && !isVegan && isVeggie && !isGlutenFree) return { ...buyer, debt: generalIndividual + veggieIndividual };
            else if (!isMeat && !isVegan && !isVeggie && isGlutenFree) return { ...buyer, debt: generalIndividual + glutenFreeIndividual };
            //DUOS
            else if (isMeat && isVegan && !isVeggie && !isGlutenFree) return { ...buyer, debt: generalIndividual + meatIndividual + veganIndividual };
            else if (isMeat && !isVegan && isVeggie && !isGlutenFree) return { ...buyer, debt: generalIndividual + meatIndividual + veggieIndividual };
            else if (isMeat && !isVegan && !isVeggie && isGlutenFree) return { ...buyer, debt: generalIndividual + meatIndividual + glutenFreeIndividual };
            else if (!isMeat && isVegan && isVeggie && !isGlutenFree) return { ...buyer, debt: generalIndividual + veganIndividual + veggieIndividual };
            else if (!isMeat && isVegan && !isVeggie && isGlutenFree) return { ...buyer, debt: generalIndividual + veganIndividual + glutenFreeIndividual };
            else if (!isMeat && !isVegan && isVeggie && isGlutenFree) return { ...buyer, debt: generalIndividual + veggieIndividual + glutenFreeIndividual };
            //TRIOS
            else if (!isMeat && !isVegan && !isVeggie && isGlutenFree) return { ...buyer, debt: generalIndividual + meatIndividual + veganIndividual + veggieIndividual };
            else if (!isMeat && !isVegan && isVeggie && !isGlutenFree) return { ...buyer, debt: generalIndividual + meatIndividual + veganIndividual + glutenFreeIndividual };
            else if (!isMeat && isVegan && !isVeggie && !isGlutenFree) return { ...buyer, debt: generalIndividual + meatIndividual + veggieIndividual + glutenFreeIndividual };
            else if (isMeat && !isVegan && !isVeggie && !isGlutenFree) return { ...buyer, debt: generalIndividual + veganIndividual + veggieIndividual + glutenFreeIndividual };
            //TODOS
            else if (isMeat && isVegan && isVeggie && isGlutenFree) return { ...buyer, debt: generalIndividual + meatIndividual + veganIndividual + veggieIndividual + glutenFreeIndividual };
            //NINGUNO
            else return { ...buyer, debt: generalIndividual };
        })
        setBuyersList(newBuyersList)
        // eslint-disable-next-line 
    }, [generalIndividual, meatIndividual, glutenFreeIndividual, veganIndividual, veggieIndividual])
    

    useEffect(() => {      
        setIndividualTotal(totalExpenses / diners);
        if (diners === 0) { setGeneralIndividual(generalTotal / 1) }
        else { setGeneralIndividual(generalTotal / diners) };
        
        setMeatIndividual(meatTotal / meatDinersNumber);
        setVeganIndividual(veganTotal / veganDinersNumber);
        setVeggieIndividual(veggieTotal / veggieDinersNumber);
        setGlutenFreeIndividual(glutenFreeTotal / glutenFreeDinersNumber);
        
    }, [totalExpenses, diners, generalTotal, meatTotal, meatDinersNumber, veganTotal, veganDinersNumber, veggieTotal, veggieDinersNumber, glutenFreeTotal, glutenFreeDinersNumber, meatIndividual])


    useEffect(() => {
        let sum = buyersList.length;
        setDiners(sum);
        let sumMeatDiners = buyersList.filter(buyer => buyer.isMeat === true);
        setMeatDiners(sumMeatDiners);
        setMeatDinersNumber(sumMeatDiners.length);
        let sumVeganDiners = buyersList.filter(buyer => buyer.isVegan === true);
        setVeganDiners(sumVeganDiners);
        setVeganDinersNumber(sumVeganDiners.length);
        let sumVeggieDiners = buyersList.filter(buyer => buyer.isVeggie === true);
        setVeggieDiners(sumVeggieDiners);
        setVeggieDinersNumber(sumVeggieDiners.length);
        let sumGlutenFreeDiners = buyersList.filter(buyer => buyer.isGlutenFree === true);
        setGlutenFreeDiners(sumGlutenFreeDiners);
        setGlutenFreeDinersNumber(sumGlutenFreeDiners.length);

    }, [buyersList]);
    
    class Buyer {
        constructor(name, expenses, buyerTotalExpenses, isMeat, isVegan, isVeggie, isGlutenFree, key) {
            this.name = name;
            this.expenses = expenses;
            this.buyerTotalExpenses = buyerTotalExpenses;
            this.isMeat = isMeat;
            this.isVegan = isVegan;
            this.isVeggie = isVeggie;
            this.isGlutenFree = isGlutenFree;
            this.key = key
        }
    }
        
    const assignExpensesToBuyer = (buyerName, newExpense, isMeat, isVegan, isVeggie, isGlutenFree) => {
        let buyerExists = buyersList.some(buyer => buyer.name === buyerName); 
        if (!buyerExists) {
            let key = buyersList.length + 1;
            let newBuyer = new Buyer(buyerName, [newExpense], parseInt(newExpense.total), isMeat, isVegan, isVeggie, isGlutenFree, key); 
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
        <ExpensesContext.Provider value={{expenses, setExpenses, totalExpenses, diners, buyersList, assignExpensesToBuyer, expensesExists, setExpensesExists, individualTotal, meatTotal, veganTotal, veggieTotal, glutenFreeTotal, meatIndividual, veganIndividual, veggieIndividual, glutenFreeIndividual, meatDiners, veganDiners, veggieDiners, glutenFreeDiners, meatDinersNumber, veganDinersNumber, veggieDinersNumber, glutenFreeDinersNumber}}>
            {children}
        </ExpensesContext.Provider>
    )
}



    // LA LOGICA QUE NO ME SALE para repartir los gastos:
        /* let buyersListAfterMeat = buyersList.map(buyer => {
            if (buyer.isMeat === true) {
                return { ...buyer, debt: generalIndividual + meatIndividual }
            } else {
                return { ...buyer, debt: generalIndividual  }
            }
        })
        console.log("lista luego de agregar deudas de CARNE: ", buyersListAfterMeat)
        
        let buyersListAfterVegan = buyersListAfterMeat.map(buyer => {
            let newDebt = buyer.debt + veganIndividual;
            if (buyer.isVegan === true) {
                return { ...buyer, debt: newDebt }
            } else if (buyer.isMeat === true) {
                return { ...buyer, debt: generalIndividual + meatIndividual }
            } else {
                return { ...buyer, debt: generalIndividual  }
            }
        })
        console.log("lista luego de agregar deudas de VEGAN: ", buyersListAfterVegan)

        let buyersListAfterVeggie = buyersListAfterVegan.map(buyer => {
            let newDebt = buyer.debt + veggieIndividual;
            if (buyer.isVeggie === true) return { ...buyer, debt: newDebt }
        })
        console.log("lista luego de agregar deudas de VEggie: ", buyersListAfterVeggie) */
