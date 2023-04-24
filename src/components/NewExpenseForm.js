import { useState } from "react";
import Form from "./Form";

const NewExpenseForm =(props)=>{
    const NewExpenseDataHandler=(data)=>{
        const ExpenseData= {
            ...data,
            id:Math.random.toString()
        }

        props.onAddExpenseData(ExpenseData);
        setEditing(false);
    }

    const [editing,setEditing]=useState(false);

    const clickHandler =()=>{

        setEditing(true);
    }

    const setEditingOff=()=>{
        setEditing(false);
    }


    return(
        <div>
        
       {!editing && <button id="addNewExp-btn" type="submit" onClick={clickHandler}>Add New Expense</button>}
        
        {editing && <Form setEditing={setEditingOff} onSubmitNewExpenseData={NewExpenseDataHandler} />
        }
        </div>
    
    )
}
export default NewExpenseForm;