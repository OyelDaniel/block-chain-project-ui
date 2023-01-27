import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import { compose } from '../../lib/util';
import {connect} from 'react-redux';
import { getAddress} from '../../actions/account';
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

class Account extends React.Component {

     componentWillMount() {
        this.props.getAddress();
     }

    render() {
        const {classes, address, loading} = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    {loading? <CircularProgress/> 
                    :
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        { address }
                    </Typography>
                    }
                </CardContent>
            </Card>
        );    
        }
    }


Account.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    connect(
        state => ({
            address: state.account.address,
            loading: state.account.loading
        }),
        dispatch => ({
            getAddress: () => dispatch(getAddress())
        })
    )
) (Account);