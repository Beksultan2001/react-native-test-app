import {clubList} from '../../data/dataArrays';
 
export const clubReducer=(state=clubList,action)=>{
    switch(action.type){
        case "ADD_CASH":
        return {...state,cash: state.cash + action.payload}
        case 'GET_CASH':
        return {...state,cash: state.cash - action.payload}
        default: 
        return state
    }
}