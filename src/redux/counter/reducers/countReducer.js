import {
  ADD_COUNT,REDUC_COUNT
} from "../actions/counterTypes";

const initUserState = {
 count:0
};

const countReducer = (state = initUserState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        count:state.count+1
      };
    case REDUC_COUNT:
      return {
        count:state.count-1

      };

    default:
      return state;
  }
};

export default countReducer;
