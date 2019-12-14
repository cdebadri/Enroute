import { call, takeLatest, put, select } from 'redux-saga/effects';
import { 
  ITEMS_LISTED,
  GET_ITEMS,
} from './types';
import * as apis from '../api';

export function* getItems() {
  try {
    const language = yield select(state => state.language);
    const genre = yield select(state => state.genre);
    const body = JSON.stringify({
      language: '',
      genre: ''
    });
    const items = yield call(apis.getItemsApi, body);
    yield put({
      type: ITEMS_LISTED,
      items
    });
  } catch(error) {
    console.log(error);
  }
}

export function* watcher() {
  yield takeLatest(GET_ITEMS, getItems);
}