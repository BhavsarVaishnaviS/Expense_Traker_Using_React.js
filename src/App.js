// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import ListComponent from './ListComponent';
import NewExpense from './NewExpense';
// import CounterComponent from './components/CounterComponent';
import ExpenseItem from './components/ExpenseItem';
// import HeloComponent from './components/HelloComponent';
// import MessageComponent from './components/MessageComponent';

var dummy_expenses = [
  {id:1, expDate:new Date(2020,12,15), expTitle:"TV Unit", expAmount:"Rs 45000"},
  {id:2, expDate:new Date (2021,10,25), expTitle:"Vacation", expAmount:"Rs 125000"},
  {id:3, expDate:new Date (2019-1,15), expTitle:"Donation", expAmount:"Rs 50000"},
  {id:4, expDate:new Date (2022,11,9), expTitle:"Renovation", expAmount:"Rs 250000"}
]

function App() {

  let [expenses, setExpenses] = useState(dummy_expenses)

  const addExpenseHandler = expense => {
    // console.log("In App component ", expense)
    setExpenses(prev =>{return [expense, ...prev]})
  }

  return (
    <div className="App">
      {/* <HeloComponent/> */}

      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      
      {expenses.map(expense => 
        (
        <ExpenseItem key={expense.id}
                    expDate={expense.expDate} 
                    expTitle={expense.expTitle} 
                    expAmount={expense.expAmount}/>
        )
      )
      }

      {/* <ExpenseItem expDate={expenses[0].expDate} expTitle={expenses[0].expTitle} expAmount={expenses[0].expAmount}/>
      <ExpenseItem expDate={expenses[1].expDate} expTitle={expenses[1].expTitle} expAmount={expenses[1].expAmount}/>
      <ExpenseItem expDate={expenses[2].expDate} expTitle={expenses[2].expTitle} expAmount={expenses[2].expAmount}/>
      <ExpenseItem expDate={expenses[3].expDate} expTitle={expenses[3].expTitle} expAmount={expenses[3].expAmount}/> */}

      {/* <MessageComponent/> */}
    </div>
  );
}

export default App;
