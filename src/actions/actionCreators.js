//add todo
export function addTodoItem(text){
  return {
    type: 'ADD_TODO_ITEM',
    text,
   }
}

//add todo
export function toggleTodoItem(id){
  return {
    type: 'TOGGLE_TODO_ITEM',
    id,
   }
}

export const deleteTodoItem = (id) => ({
  type: 'DELETE_TODOITEM',
  id
});


export function itemsLoaded(items) {
    return {
        type: 'ITEMS_LOADED',
        items
    };
}


export function loadItems() {
    return (dispatch) => {
        //dispatch(itemsIsLoading(true));

        fetch('http://localhost:3000/data.json',{
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }})
            .then((response) => response.json())
            .then((items) => dispatch(itemsLoaded(items)))
            .catch((error) => console.log(error));
    };
}
