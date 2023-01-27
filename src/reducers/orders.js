import {
    ReducerFactory,
    Assing
} from '../lib/util';
import {
    ORDER_CREATION,
    ORDER_CREATION_SUCCESS,
    ORDERS_LOAD,
    ORDERS_LOAD_SUCCESS,
    ORDER_ACTION,
    ORDER_ACTION_SUCCESS
} from '../constants/action';
import { LOCATION_CHANGE } from 'react-router-redux';

const DState = {
    newOrderTx: null,
    pending: false,
    orders: [],
    loading: false,
    updating: false
};

const Actions = {

    [ORDER_CREATION]:
     state =>
      Assing(state, {pending: true}),

    [ORDER_CREATION_SUCCESS]:
     (state, {newOrderTx}) =>
      Assing(state, {newOrderTx, pending: false}),

    [LOCATION_CHANGE]:
     state =>
      Assing(state, {newOrderTx: null}),

    [ORDERS_LOAD]:
      state =>
       Assing(state, {loading: true}),

    [ORDERS_LOAD_SUCCESS]:
     (state, {orders}) =>
      Assing(state, {orders, loading: false}),
  
    [ORDER_ACTION]:
      state  =>
       Assing(state, {updating: true}),

    [ORDER_ACTION_SUCCESS]:
      state =>
        Assing(state, {updating: false})
};

export default ReducerFactory(DState, Actions);