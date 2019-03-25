import React, { Component } from 'react';
import './App.css';
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes : [],
      url : 'https://api.edamam.com/search?q=chicken&app_id=7b133516&app_key=f810a623f3fe47dbe075efb04d2b7f37&from=0&to=30',
      base_url : 'https://api.edamam.com/search?app_id=7b133516&app_key=f810a623f3fe47dbe075efb04d2b7f37&from=0&to=30',
      query: '&q=',
      recipe_id: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6',
      pageIndex : 0,
      search : ''
    }

  }

  componentDidMount() {
      this.getRecipes();
  }

    getRecipes = () => {
    fetch(this.state.url)
        .then(data => {
          return data.json();
        })
        .then(result =>{
          this.setState({
            recipes: result.hits
          })
        })
  };

  displayPage = index => {
    switch (index) {
      case 0 :
        return <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
        />;
      case 1 :
        return <RecipeDetails
            id={this.state.recipe_id}
            handleIndex={this.handleIndex}
            recipes={this.state.recipes}
        />;
      default:
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

  handleChange = (e) =>{
    this.setState({
      search : e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {base_url, query, search} = this.state;
    this.setState(() =>{
      return {url: base_url + query + search,
              search : ''
      }
    }, () =>{this.getRecipes(); console.log(this.state.url)});
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
