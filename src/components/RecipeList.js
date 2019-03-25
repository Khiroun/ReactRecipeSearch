import React, {Component} from 'react';
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
import {Container, Row, Col} from "reactstrap";

class RecipeList extends Component {
    render() {
        const {recipes, handleDetails} = this.props;

        return (
            <React.Fragment>
                <RecipeSearch/>

                <Container my="5">
                    {/* title */}
                    <Row>
                        <Col md="12" text="center">
                            <h1 className="text-slanted" style={{textAlign: 'center'}}>
                                Recipe list
                            </h1>
                        </Col>
                    </Row>
                    {/* end title */}
                    <Row>
                        {recipes.map( recipe => {
                            return <Recipe
                                key={recipe.recipe.uri}
                            recipe={recipe.recipe}
                                handleDetails={() => handleDetails(1, recipe.recipe.uri)}
                            />
                        })}
                    </Row>

                </Container>
            </React.Fragment>
        );
    }
}

export default RecipeList;