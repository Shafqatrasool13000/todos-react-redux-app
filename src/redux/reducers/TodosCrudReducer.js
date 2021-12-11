import { Add_Todo, Update_Value } from "../types";
import { Delete_Todo } from "../types";
import { Updated_Todo } from "../types";

const initialState = {
  list: [{todo: 'Naveed'},{todo: 'Shafqat'},{todo: 'Arslan'}],
  editAble:{todo:''},
};
const AddReducer = (state = initialState, action) => {
  console.log("data in reducer",action.type)
  switch (action.type) {
    case Add_Todo:
      return {
        //1.Old State object
        ...state,
        //2.List update
        list: [
          ...state.list,
          {
            todo:action.payload
          }
        ],
      };
    case Delete_Todo:
      let DeleteData = state.list.filter((value,id) => id !== action.id);
      console.log('Deleted Data',DeleteData)
      return {
        ...state,
        list: DeleteData,
      };

    case Updated_Todo:
      const editAble=state.list.find((val,id)=>id===action.id)
      return {
        ...state, 
        editAble:editAble
      }
      case Update_Value:
    
        const updatedTodo= state.list.map((elem,id)=>{
          if(state.editAble.todo===elem.todo){
           return {...elem,todo:action.value}
          }
          return elem
        })
        console.log('updateTodo',action.value)
       return {           
         ...state,
        list:updatedTodo,
        editAble:{todo:''}               
      }
    default :
    return state
  }
};
export default AddReducer;
