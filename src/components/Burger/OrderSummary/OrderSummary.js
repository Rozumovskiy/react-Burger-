import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button.js'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingrediens)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingrediens[igKey]}
            </li>);
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: </strong>{props.price.toFixed(2)}</p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;