import React from 'react'

function Button(props) {
    return <div className="buttons">
        <button className="button" disabled={props.isAddButtonDisabled} type="submit" onClick={props.OnRemoveIngredient}>Less</button>
        <button className="button" type="submit" onClick={props.OnAddIngredient}>More</button>
    </div>
}

export default Button;