import { Epic } from 'redux-observable';
import { Action, AnyAction } from '@reduxjs/toolkit';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { increment, decrement } from '../slices/counterSlice';
import { RootState } from '../reducers';

export const epic: Epic<AnyAction, AnyAction, RootState> = (
  actions$: Observable<Action>
) =>
  actions$.pipe(
    filter(increment.match),
    map((action) => {
      console.log(action);
      console.log('shalom');
      return decrement();
    })
  );

const allEpics = [epic];

export default allEpics;
