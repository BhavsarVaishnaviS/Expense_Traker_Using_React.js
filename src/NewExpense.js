import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'


let NewExpense = (props) => {

    let f1 = (expenseDataFromChild)=> {
        // console.log("in New Expense", expenseDataFromChild)
        expenseDataFromChild = {...expenseDataFromChild, id: Math.random().toString()}
        props.onAddExpense(expenseDataFromChild)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onData = {f1}/>
        </div>
    )
}


export default NewExpense