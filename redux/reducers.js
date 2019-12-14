import {
  GET_ITEMS, ITEMS_LISTED
} from './types';

export const initState = {
  userName: '',
  language: '',
  genre: '',
  items: [],
};

export const reducer = (state = initState, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return state;
    case ITEMS_LISTED:
      return Object.assign({}, state, {
        items: action.items
      });
    default:
      return state;
  }
};