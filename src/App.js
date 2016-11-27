import React, { Component } from 'react';
import InventoryList from './InventoryList';
import NewInventoryItem from './NewInventoryItem'
import {addInventoryListItem} from './actions/inventoryItemsActions'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this)

  }
   
  addItem(quantity, description) {
    this.props.actions.default(quantity, description)
    // this.props.dispatch(addInventoryListItem(quantity, description))
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2> 
      
          <InventoryList inventoryItems= {this.props.inventoryItems}/>
          <NewInventoryItem addItem = {this.addItem}/>
        </div>
      </div>
    );
  }
}



// function mapStateToProps(state){
//   return {InventoryListItems: state.inventoryItems} 
//   //'InventoryListItems' key can now be added
// }

function mapStateToProps(state){
  return state
}



function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}

  //'actions' key can now be added
}

const connector = connect(mapStateToProps)
const connectedComponent = connector(App)


export default connectedComponent; 
// export default App;