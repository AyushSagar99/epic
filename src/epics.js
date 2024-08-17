import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { FETCH_DATA, fetchDataSuccess } from './actions';

const fetchDataEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_DATA),
    mergeMap(() =>
      ajax.getJSON('https://jsonplaceholder.typicode.com/todos/2').pipe(
        map((response) => fetchDataSuccess(response))
      )
    )
  );

export const rootEpic = fetchDataEpic;
