import {Add_Todo }from "../types"
const AddAction = (data) => {
    console.log("Add action DAta",data)
    return {
        type : Add_Todo,
        payload : data 
    
    }
}
export default AddAction;