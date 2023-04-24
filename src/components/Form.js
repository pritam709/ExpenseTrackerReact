import "./Form.css";
import React, { useState } from "react";
const Form = (props) => {
  const [title0, setTitle] = useState("");
  const titleChange = (event) => {
    const titleEntered = event.target.value;
    setTitle(titleEntered);
  };
  const [amount0, setAmount] = useState("");
  const amountChange = (event) => {
    const amtEntered = event.target.value;
    setAmount(amtEntered);
  };
  const [date0, setdate] = useState("");
  const dateChange = (event) => {
    const dateEntered = event.target.value;
   
    
    setdate(dateEntered);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: title0,
      amount: amount0,
      date: new Date(date0),
     
    };
  

    
    props.onSubmitNewExpenseData(ExpenseData);
    setAmount("");
    setTitle("");
    setdate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form">
        <div className="form-control">
          <label>Title:</label>
          <input type="text" onChange={titleChange} value={title0}></input>
        </div>
        <div className="form-control">
          <label>Amount:</label>
          <input type="number" onChange={amountChange} value={amount0}></input>
        </div>
        <div className="form-control">
          <label>Date:</label>
          <input type="date" onChange={dateChange} value={date0}></input>
        </div>
        
        <div className="form-control">
        <button type="button" onClick={props.setEditing}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
        
      </div>
    </form>
  );
};

export default Form;
