import './ExpenseForm.css'
import { useState } from 'react'
let ExpenseForm = (props) =>{

    let [inTitle, setTitle] = useState("")
    let [inAmount, setAmount] = useState("")
    let [inDate, setDate] = useState("")

    // {'title':title; 'amount':amount; 'date':date}

    let onTitleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    let onAmountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    let onDateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    let onSubmitHandler = (event)=>{
        event.preventDefault() //not allowing the default submit

        //use the form data to create json object
        let expenseData = {expTitle:inTitle, expAmount:inAmount, expDate:new Date (inDate)}
        // console.log(expenseData)
        props.onData(expenseData)

        //after submitting clear the field
        setTitle("");
        setAmount("");
        setDate("");
    }
    return (
<form onSubmit={onSubmitHandler}> 
            <div className="new-expense__controls"> 
               <div className="new-expense__control"> 
                   <label>Title</label> 
                   <input onChange={onTitleChangeHandler}></input>
               </div> 
               <div className="new-expense__control"> 
                   <label>Amount</label> 
                   <input type="number" onChange={onAmountChangeHandler}/> 
               </div> 
               <div className="new-expense__control"> 
                   <label>Date</label> 
                   <input type="date" min="2019-01-01" max="2022-12-31" 
                   onChange={onDateChangeHandler} /> 
               </div> 
            </div> 
            <div className="new-expense__actions"> 
                <button type="reset">Cancel</button> 
                <button type="submit">Add Expense</button> 
            </div> 
        </form> 
    )
}

export default ExpenseForm