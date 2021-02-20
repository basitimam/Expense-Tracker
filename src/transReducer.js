const TransactionReducer = ((state,action)=>{
    switch(action.type){
     case 'ADD':
         return{
             ...state,
             transactions: [action.payload,...state.transactions]
         }
        default:
            return state;
    }
})
export default TransactionReducer