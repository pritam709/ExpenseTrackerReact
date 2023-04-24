import "./AddExpenseBtn.css";
import React, { useState } from "react";
const AddExpenseBtn = (props) => {
  const [form, SetForm] = useState(true);

  const expenseBtnClickHandler = () => {
    SetForm(false);
    props.clickDone(form);
  };

  return (
    <div className="addExpense-btn">
      <button id="AddNewExpense" onClick={expenseBtnClickHandler}>
        Add New Expense
      </button>
    </div>
  );
};

export default AddExpenseBtn;
