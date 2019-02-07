import React from 'react';
import Button from './IngredientControl/Button/Button';
import SaladControl from './IngredientControl/SaladControl/SaladControl';
import BaconControl from './IngredientControl/BaconControl/BaconControl';
import CheeseControl from './IngredientControl/CheeseControl/CheeseControl';
import MeatControl from './IngredientControl/MeatControl/MeatControl';
import Control from './IngredientControl/Control/Control';




function BurgerForm(props) {
    return <div className="BurgerForm">
        {Object.keys(props.ingredients).map((name) => {
            return <Control
                name={name}
                onRemoveIngredient={props.onRemoveIngredient}

            />
        })}
        {/*<SaladControl onRemoveIngredient={props.onRemoveIngredient} name={props.ingredients.salad.name}/>*/}
        {/*<BaconControl/>*/}
        {/*<CheeseControl/>*/}
        {/*<MeatControl/>*/}
    </div>
}

export default BurgerForm;