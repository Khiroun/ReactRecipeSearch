import recipesTemp from "./recipesTemp";

export default uri => {
        return recipesTemp.find(element => {
        return element.recipe.uri === uri;
    });
}