
// what is inventoryItems?? where in inventoryItemsReducer does it say that?
// is it a collection of all possible actions?
import {combineReducers} from 'redux';
import inventoryItems from './inventoryItemsReducer';

const rootReducer = combineReducers({
  inventoryItems
  //Ans: the reducer's filename without the file extension
})

export default rootReducer