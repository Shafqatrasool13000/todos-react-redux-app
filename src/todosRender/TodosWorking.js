import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import AddAction from "../redux/actions/AddAction";
import DeleteAction from "../redux/actions/DeleteAction";
import EditAction, { UpdateAction } from "../redux/actions/EditAction";
import { Update_Value } from "../redux/types";
import { Box } from "@mui/material";

const TodosWorking = () => {
  const [addTodo, setAddTodo] = useState("");
  const editData = useSelector((state) => state.TodosCrudReducer.editAble);
  useEffect(() => {
    console.log("use effect run")
    setAddTodo(editData.todo)
  }, [editData.todo])
  console.log('Todo working re-render')
//get Editable Data
  //Add New addTodo
  // const [editaddTodo, setEditaddTodo] = useState(editData)
  // const [IsUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const userTodos = useSelector((state) => state.TodosCrudReducer.list);
  
  console.log("userTodos", userTodos);
  console.log("Editable todos working",editData)
  const addTodohandler = (e) => {
    setAddTodo(e.target.value);
  };
  console.log("inputEdit",addTodo)

  const AddHandler = () => {
    if(!addTodo){
      console.log("plx fill data")
    }else if(addTodo&&editData.todo){
      console.log("edit Todo confirm")
      dispatch(UpdateAction(addTodo))
      setAddTodo('')
    }else{
      
      dispatch(AddAction(addTodo));
       setAddTodo("");
    }
  };
  const DeleteHandler = (elem) => {
    dispatch(DeleteAction(elem));
  };
  const EditHandler = (name,elem) => {
    dispatch(EditAction(elem,name)); 
        // setAddTodo(editData.todo)    
  };
   
  return (
    <>
      <Typography variant="h6" component="h2">
        Todo redux
      </Typography>
      <TextField
        id="standard-basic"
        label="Enter Text Here..."
        variant="standard"
        value={addTodo}
        onChange={addTodohandler}
      />
      <Box ml={2} mt={2} component='span'>
      <Button variant="contained" onClick={AddHandler}>
        ADD Items
      </Button>
      </Box>

      {userTodos.map((elem,index) => {
        return (
          <div key={index}>
            <h1> {elem.todo} </h1>
            <Button variant="contained" onClick={() => EditHandler('shafqat',index)}>
              Edit Items
            </Button>

            <Button variant="contained" onClick={() => DeleteHandler(index)}>
              Delete Items
            </Button>
           
          </div>
          
        );
      })}
    </>
  );
};

export default TodosWorking;
