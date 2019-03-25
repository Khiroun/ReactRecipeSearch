export default (uri, recipes) => {
        return recipes.find(element => {
        return element.recipe.uri === uri;
    });
}