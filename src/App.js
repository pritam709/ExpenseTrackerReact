// import logo from './logo.svg';
// import './App.css';
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";
function App() {
  const Expense=[
    {
    id:1,
    title:"pen",
    amount:20,
     date : new Date("2022-03-25")
  },
  {
    id:2,
    title:"paper",
    amount:200,
    date : new Date("2022-03-24")
  },
  {
    id:3,
    title:"notebook",
    amount:65,
    date : new Date("2022-03-23")
  }
]

  const enteredDataHandler=newData=>{
    console.log('in aap.js');
    console.log(newData);
  }
  return (
    <div className="App">
      <NewExpense onAddExpenseData={enteredDataHandler} />
      

      <Expenses item={Expense} />
    </div>
  );
}

export default App;
