import React from 'react'

function Button(props) {
    return <div className="buttons">
        {console.log(props.onRemoveIngredient)}
        <button className="button" disabled={props.isAddButtonDisabled(props.name)} type="submit" onClick={() => {return props.onRemoveIngredient(props.name)}}>Less</button>
        <button className="button" type="submit" onClick={() => {return props.onAddIngredient(props.name)}}>More</button>
    </div>
}

export default Button;