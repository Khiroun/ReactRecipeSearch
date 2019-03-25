import React, { Component } from 'react';
import './App.css';
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import recipesTemp from "./recipesTemp";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes : [],
      url : 'https://api.edamam.com/search?q=chicken&app_id=7b133516&app_key=f810a623f3fe47dbe075efb04d2b7f37&from=0&to=60',
        recipe_id: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6',
      pageIndex : 0
    }

  }

  componentDidMount() {
      this.getRecipes();
  }

    getRecipes = () => {
      this.setState({
          recipes: recipesTemp
      })
  };

  displayPage = index => {
    switch (index) {
      case 0 :
        return <RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} />;
      case 1 :
        return <RecipeDetails id={this.state.recipe_id} handleIndex={this.handleIndex} />
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex : index
    })
  };

  handleDetails = (index, id) =>{
    this.setState({
    recipe_id: id,
    pageIndex: index
    })
  };

  render() {
    return (
     <React.Fragment>
       {this.displayPage(this.state.pageIndex)}
     </React.Fragment>
    );
  }
}

export default App;
