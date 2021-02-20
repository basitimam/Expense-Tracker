import React ,{useContext} from 'react';
import {TransactionContext} from '../src/transContext';

export const HistoryRecord = () => {
   
    const {transactions} = useContext(TransactionContext);

    
    return(
        <div>
           <ul className="history">
               {transactions.map((transObj,ind)=>{

                return(
                    <li key={ind}>
                   <span>{transObj.Description}</span><br/><span>${transObj.Amount}</span>
               </li>
                )

               })}
               
           </ul>
        </div>

    )

}
