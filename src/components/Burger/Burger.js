import React from 'react';

import classes from './Burger.css';
import BurgerIngrd from './BurgerIngrd/BurgerIngrd';

const burger = (props) => {

    let transformIngredients = Object.keys(props.ingrediens)
        .map(igKey => {
            return [...Array(props.ingrediens[igKey])].map((_, i) => {
                return <BurgerIngrd key={igKey + i} type={igKey} />;
            }); 
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingrediens</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngrd type="bread-top" />
            {transformIngredients}
            <BurgerIngrd type="bread-bottom" />
        </div>
    );
};

export default burger;