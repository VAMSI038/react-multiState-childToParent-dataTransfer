import React, { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm(props) {
    const [input,setInput]=useState({
        inputTitle:'',
        inputAmount:'',
        inputDate:''
    });
    const titleHandler=event=>{
        setInput((prev)=>{
            return{
                ...prev,
                inputTitle:event.target.value
            };
                });
    };
    const amountHandler=event=>{
        setInput((prev)=>{
            return{
                ...prev,
                inputAmount:event.target.value
            };
                });
    };
    const dateHandler=event=>{
        setInput((prev)=>{
            return{
                ...prev,
                inputDate:event.target.value
            };
                });
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData=input;
        // console.log(expenseData);
        props.onSave(expenseData);
        setInput({
            inputTitle:'',
            inputAmount:'',
            inputDate:''
        })
    };

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleHandler} value={input.inputTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountHandler} value={input.inputAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-04-22' onChange={dateHandler} value={input.inputDate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm;