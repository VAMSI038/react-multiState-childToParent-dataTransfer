import React from 'react'
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
function NewExpenses(props) {
  const saveHandler=(data)=>{
      const newData={
        ...data,
        id:Math.random().toString()
      };
      // console.log(newData);
      props.onData(newData);
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSave={saveHandler}/>
    </div>
  )
}

export default NewExpenses;