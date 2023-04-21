import  "./CreateExpenseItem.css"
import Date from "./Date";
const CreateExpenseItem =(props)=>{
    return <div className="outer">
        <div className="date">
           <Date date= {props.date} />
        </div>
        <div className="title">
           <h2> {props.title} </h2>
        </div>
        <div className="amount">
            Rs{props.amount}
        </div>
    </div>
} 

export default CreateExpenseItem;