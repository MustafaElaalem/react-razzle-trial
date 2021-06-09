
import {
  ADD_COUNT,REDUC_COUNT, SUM_COUNTS
} from "./counterTypes";

//action creaters
export const addToCount = () => {
  return {
    type: ADD_COUNT,
  };
};

export const reduceCount = () => {
  return {
    type: REDUC_COUNT,
  };
};

export const sumAllCount = () => {
  return {
    type: SUM_COUNTS
  };
};
