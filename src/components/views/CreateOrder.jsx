import * as React from 'react';
import Typography from '@material-ui/core/Typography';

import {withStyles} from '@material-ui/core/styles';
import { compose } from '../../lib/util';
import {connect} from 'react-redux';
import { createOrder} from '../../actions/orders';
import OrderForm from '../components/OrderForm';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    card: {
        winWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12
    },
};

const CreateOrder = ({newOrderTx, pending, createOrder}) =>
    (pending ?
        <CircularProgress/> :
        <div>
            <OrderForm onSubmit={ createOrder }/>
            {
                ((!!newOrderTx) ? <Typography>order { newOrderTx }</Typography> : <p/>)
            }
        </div>
    );

export default compose(
    withStyles(styles),
    connect(
        state => ({
            newOrderTx: state.orders.newOrderTx,
            pending: state.orders.pending
        }),
        dispatch => ({
            createOrder: order => dispatch(createOrder(order))
        })
    )
) (CreateOrder);