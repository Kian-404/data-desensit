import { combineReducers } from 'redux';
import { type } from '../action';
const defaultState = {
  showMenu: true,
}
const DataReducer = (state = defaultState, action) => {
  debugger;
  switch (action.type) {
    case type.SWITCH_MENU:
      return {
        ...state,
        menuName: action.menuName
      };

      break;
      case type.TOOGLE_MENU:
        return {
          ...state,
          showMenu: action.showMenu
        }
    default:
      return {
        ...state
      }
      break;
  }
}

export default DataReducer;