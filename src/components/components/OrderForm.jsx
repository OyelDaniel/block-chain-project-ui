import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
     display: 'flex',
        flexWrap: 'wrap',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class OrderForm extends React.Component {
    state = {
        title: '',
        desc: '',
        delCompany: '',
    customer: '',
    };

handleChange = e => {
    const {name, value} = e.target;
    this.setState({
        [name]: value
    });
};

render() {
    const { classes, onSubmit} = this.props;

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                label='Title'
                name='title'
                fullWidth
                className={classes.textField}
                value={this.state.title}
                onChange={this.handleChange}
             />       
             <TextField
                label='Description'
                name='desc'
                fullWidth
                className={classes.textField}
                value={this.state.desc}
                onChange={this.handleChange}
            /> 
                <TextField
                    label='Delivery Company'
                    name='delCompany'
                    fullWidth
                    className={classes.textField}
                    value={this.state.delCompany}
                    onChange={this.handleChange}
            />         
                <TextField
                    label='Customer'
                    name='customer'
                    fullWidth
                    className={classes.textField}
                    value={this.state.customer}
                    onChange={this.handleChange}
            />
            <Button onClick={e => {
                e.preventDefault();
                (!!onSubmit) && onSubmit(this.state)
            }}>
                create
            </Button>
            
        </form>
        );
    }
}    

OrderForm.PropTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OrderForm);