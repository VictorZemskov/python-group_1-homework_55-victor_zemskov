import React from 'react';

import Control from './IngredientControl/Control/Control';




function BurgerForm(props) {
    return <div className="BurgerForm">
        {Object.keys(props.ingredients).map((name) => {
            return <Control
                name={name}
                onRemoveIngredient={props.onRemoveIngredient}
                onAddIngredient={props.onAddIngredient}
                isAddButtonDisabled={props.isAddButtonDisabled}
            />
        })}

    </div>
}

export default BurgerForm;