export function getInventoryListItems(){
  //change this to getInventoryItems()
  const items = [
  {quantity: '3lbs', description: "flour"}, {quantity: "2 dozen", description: "eggs"}, {quantity: '2lbs', description: "sugar"}
]
return {type:'GET_INVENTORY_LIST_ITEMS' , payload: items}
}

export function addInventoryListItem(qty, desc){
  const new_object = {quantity: qty, description: desc}
  return {type:'ADD_INVENTORY_LIST_ITEM' , payload: new_object}
}