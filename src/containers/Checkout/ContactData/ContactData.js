import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button.js';
import Spinner from '../../../components/UI/Spinner/Spinner.js';
import classes from './ContactData.css';
import axios from "../../../axios-orders";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.prebentDefault();
        this.setState({ loading: true });
        const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
        customer: {
            name: "Bogdan Rozumovskiy",
            address: {
            street: "Kosmnavtiv 14",
            zipCOde: "3453",
            country: "Ukraine"
            },
            email: "test@test.com"
        },
        deliveryMethod: "fastest"
        };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false});
      });
    }

    render() {
        let form = (
            <form>
                    <input className={classes.input} type="text" name="name" placeholder="Your name"></input>
                    <input className={classes.input} type="text" name="email" placeholder="Your email"></input>
                    <input className={classes.input} type="text" name="street" placeholder="Your street"></input>
                    <input className={classes.input} type="text" name="postal" placeholder="Postal Code"></input>
                    <Button btnType="Succeess" clicked={this.orderHandler}>ORDER </Button>
            </form>
        );
        if (this.state.loading) {
            form= <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;