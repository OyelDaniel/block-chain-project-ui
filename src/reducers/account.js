import {
    ReducerFactory,
    Assing
} from '../lib/util';
import {
    ACCOUNT_LOAD_ADDRESS,
    ACCOUNT_LOAD_ADDRESS_SUCCESS
} from '../constants/action';

const DState = {
    loading: false,
    address: ''
};

const Actions = {

    [ACCOUNT_LOAD_ADDRESS]:
        state => Assing(state, {loading:true}),

    [ACCOUNT_LOAD_ADDRESS_SUCCESS]:
        (state, {address}) => Assing(state, {address, loading: false})    
};

export default ReducerFactory(DState, Actions);