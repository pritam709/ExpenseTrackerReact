import "./Form.css";
import React, { useState } from "react";
const Form = (props) => {
  const [title, setTitle] = useState("");
  const titleChange = (event) => {
    const title = event.target.value;
    setTitle(title);
  };
  const [amount, setAmount] = useState("");
  const amountChange = (event) => {
    const amt = event.target.value;
    setAmount(amt);
  };
  const [date, setdate] = useState("");
  const dateChange = (event) => {
    const date = event.target.value;
    setdate(date);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      newTitle: title,
      newAmount: amount,
      newDate: new Date(date),
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
          <input type="text" onChange={titleChange} value={title}></input>
        </div>
        <div className="form-control">
          <label>Amount:</label>
          <input type="number" onChange={amountChange} value={amount}></input>
        </div>
        <div className="form-control">
          <label>Date:</label>
          <input type="date" onChange={dateChange} value={date}></input>
        </div>
        <div className="form-control">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
