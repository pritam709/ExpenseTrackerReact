import React ,{useState} from "react";
import CreateExpenseItem from "./CreateExpenseItem"
import "./expenseBoard.css"
import ExpenseFilter from "./ExpenseFilter";

const Expense=(props)=>{
    const [year, setYear] = useState("2020");
    const yearHandler=(yearSelected)=>{
        console.log(yearSelected);
        setYear(yearSelected);
        

    }
   return <div className="expenseBoard">
   <ExpenseFilter defaultYear= {year} selectedYear={yearHandler} />
    <CreateExpenseItem 
        title={props.item[0].title}
        date= {props.item[0].date}
        amount={props.item[0].amount}
    />
    <CreateExpenseItem 
        title={props.item[1].title}
        date= {props.item[1].date}
        amount={props.item[1].amount}
    />
    <CreateExpenseItem 
        title={props.item[2].title}
        date= {props.item[2].date}
        amount={props.item[2].amount}
    />
   </div>
}

export default Expense; 