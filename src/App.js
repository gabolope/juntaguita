import { ExpensesProvider } from "./contexts/ExpensesContext";
import ExpensesListContainer from "./components/ExpensesListContainer";
import NewExpense from "./components/NewExpense";
import TotalExpenses from "./components/TotalExpenses";
import DinersList from "./components/DinersList";


function App() {
  return (
    <ExpensesProvider>
      <NewExpense />
      <ExpensesListContainer />
      <TotalExpenses />
      <DinersList />
    </ExpensesProvider>
  )
}

export default App;
