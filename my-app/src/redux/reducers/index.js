import todos from '_REDUCERS/todos';
import visibilityFilter from '_REDUCERS/visibilityFilter';
import tabFilter from '_REDUCERS/tabFilter';
import snakeBody from '_REDUCERS/snakeBody';
import snakeFood from '_REDUCERS/snakeFood';
import table2048 from '_REDUCERS/G2048';
import {pics,holdpic} from '_REDUCERS/gpic';
import { combineReducers } from "redux";


const todoApp = combineReducers({
  visibilityFilter,
  todos,
  tabFilter,
  snakeBody,
  snakeFood,
  table2048,
  holdpic,
  pics,
})

export default todoApp