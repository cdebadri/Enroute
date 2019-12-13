import {
  GET_ITEMS, ITEMS_LISTED,
} from './types';

export const getItemsAction = () => ({
  type: GET_ITEMS
});

export const listItemsAction = items => ({
  type: ITEMS_LISTED, items
});