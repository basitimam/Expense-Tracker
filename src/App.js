import React,{useState,useContext} from 'react';
import './App.css';
import {HistoryRecord} from '../src/historyRecord';
import {TransactionProvider,TransactionContext} from '../src/transContext';

function App() {
  let {transactions,addTransaction} = useContext(TransactionContext);
       
let [newDesc,setDesc] = useState("");
let [newAmount,setAmount] = useState(0);

console.log(newAmount);
console.log(newDesc);
  const handleAddition = (event) =>
{
  event.preventDefault();
 addTransaction({
    amount: newAmount,
     desc: newDesc })
}

let income = 0;
let expense = 0;

for(var i=0 ;i<transactions.length;i++)
{
  if(transactions[i].Amount>0)
  income += transactions[i].Amount;
  else
  expense += transactions[i].Amount;
}

let balance = income + expense

  return (
    <TransactionProvider>
    <div className="App">
     <div className="Expense"> <h1>Expense Tracker</h1></div>
      <h3>Your Balance <br></br> ${balance}</h3>

      <div className="data-box">
        <h4><span>INCOME</span><br/><span >${income}</span></h4>
        
        <h4><span>EXPENSE</span><br/><span>${expense}</span></h4>

      </div>
      <h4>History</h4>
      <hr></hr>
      <HistoryRecord ></HistoryRecord>

      <h3>Add New transaction</h3>
      <hr/>
      <form className="formdes" onSubmit={handleAddition}>
      <h5>Enter Description</h5>
      <input type="text" onChange={(ev)=>setDesc(ev.target.value)} required/>
     <br></br>
      
      <h5>Enter Amount</h5>
      <input type="number" onChange={(ev)=>setAmount(ev.target.value)} required/>
      <div className="button">

      <input type="submit" className="btn" value='Add Transaction' />
      </div>
      </form>
      
     
    </div>
    </TransactionProvider>
  );
}

export default App;
