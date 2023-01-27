import React from "react";
import PropTypes from "prop-types";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { History } from "../../store/index";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColour: theme.palette.background.paper,
        position:'relative',
        overflow: 'auto',
        maxHeight: '300',
    },
    listSection: {
        backgroundColour: 'inherit',
    },
    ul: {
        backgroundColour:'inherit',
        padding: 0,
    },
});

const OrderList = ({ classes, orders }) => {
    
    
    return (
        <List className={classes.root} subheader={<li />}>
            {orders.map((order, index) => (
                <li key={'section-${order.index}'} className={classes.listSection}>
                    <ul className={classes.ul}>
                            <ListItem key={'item-${index}'}>
                                <ListItemText primary={'Order ${index} : ${order.0}'} onClick={History.push.bind(History, '/orders/${index}')} />
                            </ListItem>
                    </ul>
                </li>
            ))}
        </List>
    );   
};

OrderList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderList);