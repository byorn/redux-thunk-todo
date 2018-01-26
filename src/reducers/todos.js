//a reducer takes in two things

//1.) the action (info about what happend)
//2.) copy of current state

function todos(state = [], action){
  console.log(state);
  switch(action.type){
    case 'ADD_TODO_ITEM':

        let todoItem = {
                          id: state.length+1,
                          text: action.text
                       };
        let newarr = [...state, todoItem];

        return [...state, todoItem];

    case 'TOGGLE_TODO_ITEM':

        return state.map(todo => {
                   if(todo.id === action.id){
                     return {...todo, completed: !todo.completed}
                   } else{
                     return todo
                   }
                 }
             )
    case 'DELETE_TODOITEM':
          console.log("DElete:"+state);
        return state.filter(todo => {

             return (todo.id !== action.id);


        })

return state;
    case 'ITEMS_LOADED':
        return action.items;
    default:
    return state;
  }
  return state;
}
export default todos;
