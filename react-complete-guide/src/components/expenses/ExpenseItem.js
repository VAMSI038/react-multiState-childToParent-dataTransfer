import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const [name, setName] = useState(props.title);
  const buttonHandler = () => {
    console.log("clicked");
    setName("vamsi");
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{name}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={buttonHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;