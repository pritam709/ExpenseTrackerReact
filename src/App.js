// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
import NewExpenseForm from "./components/NewExpenseForm";
import Expenses from "./components/Expenses";
const dummyExpense = [];
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
