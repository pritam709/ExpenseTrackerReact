import React, { useState } from "react";
import CreateExpenseItem from "./CreateExpenseItem";
import "./expenseBoard.css";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
  const [year, setYear] = useState("2020");
  const yearHandler = (yearSelected) => {
    setYear(yearSelected);
  };
  const result = props.item.filter((oneObj) => {
    return oneObj.date.getFullYear().toString() === year;
  });
   let ExpenseFlag = true;
    if(result.length ===0)
    {
        ExpenseFlag =false;
    }
  return (
    <div className="expenseBoard">
      <ExpenseFilter defaultYear={year} selectedYear={yearHandler} />

      {ExpenseFlag ? result.map((oneExpense) => {
        return (
          <CreateExpenseItem
            key={oneExpense.id}
            title={oneExpense.title}
            date={oneExpense.date}
            amount={oneExpense.amount}
          />
        );
      }): <p>No Expense Found!!!</p>}
    </div>
  );
};

export default Expense;
