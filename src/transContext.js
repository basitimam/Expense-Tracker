import React,{createContext} from 'react';
import TransactionReducer from '../src/transReducer';
import { useReducer } from 'react';


const initialTransaction = {
    transactions: [
    {Amount: 500.32,Description:"cash"},
    {Amount: 300.00,Description:"bills"},
    {Amount: -100.33,Description:"household items"},
    {Amount: 200,Description:"baaap"}
    ]
};

    export const TransactionContext = createContext(initialTransaction);


    export const TransactionProvider =({children}) =>{
        let [state ,dispatch] = useReducer(TransactionReducer,initialTransaction);

        function addTransaction(transObj){
            dispatch({
                type:"ADD",
                payload:{ 
                    amount: transObj.Amount,
                desc: transObj.desc
            },
            })
        }
    

        return(
            <TransactionContext.Provider value={
                {
                    transactions:state.transactions,
                    addTransaction
                }
            }>
                {children}
                </TransactionContext.Provider>
        );
    
    }

    