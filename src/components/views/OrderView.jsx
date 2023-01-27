import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import OrderList from '../components/OrderList';
import { compose } from '../../lib/util';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { 
    startDelivering,
    stopDelivering,
    accept,
    decline
} from '../../actions/orders';

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

class Orders extends React.Component {

    render() {
        const {
            classes, orders, index, account, updating, startDelivering, stopDelivering, accept, decline
        } = this.props;
        const order = orders[index];
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        { order[0] }
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        { order[1] }
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        { order[5] }
                    </Typography>
                </CardContent>
                {
                    (order[5] == 0 && order[3] == account) ?
                        <Button onClick={ e => {
                            e.preventDefault();
                            startDelivering(index)
                        }}>
                            Start delivering
                        </Button> :
                    (order[5] == 1 && order[3] == account) ?
                    <Button onClick={ e => {
                        e.preventDefault();
                        stopDelivering(index)
                    }}>
                        Stop delivering
                    </Button> :   
                    (order[5] == 2 && order[4] == account) ?
                    <Button onClick={ e => {
                        e.preventDefault();
                        accept(index)
                    }}>
                        Accept
                    </Button> : <p/>
                }
            </Card>
        );    
        }
    }


Orders.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    connect(
        (state, ownProps) => ({
            index: ownProps.params.index,
            orders: state.orders.orders,
            account: state.account.address,
            updating: state.orders.updating,
        }),
        dispatch => ({
            startDelivering: index => dispatch(startDelivering(index)),
            stopDelivering: index => dispatch(stopDelivering(index)),
            accept: index => dispatch(accept(index)),
            decline: index => dispatch(decline(index))
        })
    )
) (Orders);