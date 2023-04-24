// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
import NewExpenseForm from "./components/NewExpenseForm";
import Expenses from "./components/Expenses";
const dummyExpense = [
  {
    id: 1,
    title: "pen",
    amount: 20,
    date: new Date("2020-04-18"),
  },
  {
    id: 2,
    title: "paper",
    amount: 200,
    date: new Date("2021-04-18"),
  },
  {
    id: 3,
    title: "notebook",
    amount: 65,
    date: new Date("2022-04-18"),
  },
];
function App() {
  const [Expense, setExpense] = useState(dummyExpense);

  const enteredDataHandler = (newData) => {
    setExpense((prevExpense) => {
      return [newData, ...prevExpense];
    });
  };
  
  return (
    <div className="App">
      
      <NewExpenseForm onAddExpenseData={enteredDataHandler} />
      <Expenses item={Expense} />
    </div>
  );
}

export default App;
