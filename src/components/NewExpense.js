import Form from "./Form";
const NewExpense =(props)=>{
    const NewExpenseDataHandler=(data)=>{
        const ExpenseData= {
            ...data,
            id:Math.random.toString()
        }

        props.onAddExpenseData(ExpenseData);
    }

    return(
        <div><Form onSubmitNewExpenseData={NewExpenseDataHandler} /></div>
    
    )
}
export default NewExpense;