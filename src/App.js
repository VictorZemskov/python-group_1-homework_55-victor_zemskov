import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Burger from './components/Burger/Burger';
import BurgerForm from "./components/BurgerForm/BurgerForm";

const availableIngredients = {
    salad: {price: 5, label: 'Салат'},
    cheese: {price: 20, label: 'Сыр'},
    meat: {price: 30, label: 'Мясо'},
    bacon: {price: 30, label: 'Бекон'},
};

class App extends Component {
  state = {
    ingredients: {
      salad: {count: 0, total: 0},
      cheese: {count: 0, total: 0},
      meat: {count: 0, total: 0},
      bacon: {count: 0, total: 0},
    }
  };

  addIngredient = (name) => {
    let ingredient = {...this.state.ingredients[name]};
    ingredient.count += 1;
    ingredient.total = ingredient.count * availableIngredients[name].price;

    let ingredients = {...this.state.ingredients};
    ingredients[name] = ingredient;

    let state = {...this.state};
    state.ingredients = ingredients;

    this.setState(state);
  };

  removeIngredient = (name) => {
    let ingredient = {...this.state.ingredients[name]};
    if(ingredient.count > 0) {
      ingredient.count -= 1;
    }
    ingredient.total = ingredient.count * availableIngredients[name].price;
    console.log(ingredient.count * availableIngredients[name].price, 'test')

    let ingredients = {...this.state.ingredients};
    ingredients[name] = ingredient;

    let state = {...this.state};
    state.ingredients = ingredients;

    this.setState(state);
  };

  getTotal = () => {
    let result = this.state.ingredients.salad.total +
                 this.state.ingredients.cheese.total +
                 this.state.ingredients.meat.total +
                 this.state.ingredients.bacon.total ;
    console.log(this.state)
    return result;
  };

  addButtonDisabled = (name) => {
    let ingredient = {...this.state.ingredients[name]};
    return ingredient.count < 1;
  };

  render() {
    return (
      <div className="App">
          <Burger ingrediets={this.state.ingredients}/>
          <div className="panel">
            <div className="TotalPrice">Current Price:<b> {this.getTotal()} soms</b></div>

            <BurgerForm
                onRemoveIngredient={this.removeIngredient}
                onAddIngredient={this.addIngredient}
                isAddButtonDisabled={this.addButtonDisabled}
                ingredients = {availableIngredients}
            />
          </div>
      </div>
    );
  }
}

export default App;

