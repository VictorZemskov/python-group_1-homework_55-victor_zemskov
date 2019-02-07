import React from 'react'
import Button from "../Button/Button";

function Control(props) {
    return <div className=" name_ingredient">{props.name}
        <Button
            onRemoveIngredient={props.onRemoveIngredient}
            onAddIngredient={props.onAddIngredient}
            isAddButtonDisabled={props.isAddButtonDisabled}
            name={props.name}
        />
    </div>;
}

export default Control;