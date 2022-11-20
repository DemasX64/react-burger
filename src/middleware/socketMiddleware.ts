/* eslint-disable import/no-cycle */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import type { Middleware, MiddlewareAPI } from 'redux';
import {
  connect, setData, setIsConnected, disconnect,
} from '../services/reducers/orders';
import { AppDispatch, RootState } from '../services/store';

export const socketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      if (action.type === connect.type) {
        socket = new WebSocket(action.payload);
      }
      if (socket) {
        if (action.type === disconnect.type) {
          socket.close();
        }
        socket.onopen = () => {
          dispatch(setIsConnected(true));
        };

        socket.onerror = () => {
          dispatch(setIsConnected(false));
        };

        socket.onmessage = (event) => {
          const { data } = event;
          dispatch(setData(JSON.parse(data)));
        };
        socket.onclose = () => {
          dispatch(setIsConnected(false));
        };
      }

      next(action);
    };
  }) as Middleware;
};
