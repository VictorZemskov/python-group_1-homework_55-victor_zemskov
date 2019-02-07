import React from 'react'
import Button from "../Button/Button";

function SaladControl(props) {
    return <div className="SaladControl name_ingredient">Salad
        {console.log(props.onRemoveIngredient)}
        <Button onRemoveIngredient={props.onRemoveIngredient}/>
    </div>;
}

export default SaladControl;