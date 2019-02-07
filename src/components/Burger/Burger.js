import React from 'react';
import Bacon from './Bacon/Bacon';
import Cheese from './Cheese/Cheese';
import Meat from './Meat/Meat';
import Salad from './Salad/Salad';

function Burger(props) {
    const {salad, meat, cheese, bacon} = props.ingrediets;
    let salads = [];
    for(let i=0; i<salad.count; i++) salads.push(<Salad/>);
    let meats = [];
    for(let i=0; i<meat.count; i++) meats.push(<Meat/>);
    let cheeses = [];
    for(let i=0; i<cheese.count; i++) cheeses.push(<Cheese/>);
    let bacons = [];
    for(let i=0; i<bacon.count; i++) bacons.push(<Bacon/>);

    return <div className="Burger">
              <div className="BreadTop">
                  <div className="Seeds1"></div>
                  <div className="Seeds2"></div>
              </div>
              {salads}
              {meats}
              {cheeses}
              {bacons}
              <div className="BreadBottom"></div>
          </div>
}

export default Burger;