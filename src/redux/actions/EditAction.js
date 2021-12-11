import { Updated_Todo, Update_Value } from "../types";
const EditAction = (id) => {
  return {
    type: Updated_Todo,
    id,
  };
};
export default EditAction;

const UpdateAction = (value) => {
  return {
    type: Update_Value,
    value,
  };
};
export { UpdateAction };
