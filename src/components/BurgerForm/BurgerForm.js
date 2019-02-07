import React from 'react';
import Button from './IngredientControl/Button/Button';
import SaladControl from './IngredientControl/SaladControl/SaladControl';
import BaconControl from './IngredientControl/BaconControl/BaconControl';
import CheeseControl from './IngredientControl/CheeseControl/CheeseControl';
import MeatControl from './IngredientControl/MeatControl/MeatControl';



function BurgerForm(props) {
    return <div className="BurgerForm">
        <SaladControl/>
        <BaconControl/>
        <CheeseControl/>
        <MeatControl/>
    </div>
}

export default BurgerForm;