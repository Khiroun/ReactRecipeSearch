import React, {Component} from 'react';
import {Container, Row, Col, Button} from "reactstrap";


import tempDetails from "../tempDetails";


class RecipeDetails extends Component {
    constructor(props){
        super(props);
        this.state =  {
            recipe: tempDetails(this.props.id).recipe,
            ingredients : tempDetails(this.props.id).recipe.ingredientLines
        }

    }


    render() {
        const {image, label, shareAs, source, url} = this.state.recipe;
        const {handleIndex} = this.props;
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs="10" md="6" className="mx-auto my-3">
                            <Button color="warning" className="text-capitalize mb-5" onClick={() => handleIndex(0)}>Back to recipe list</Button>
                            <img src={image} alt={label} className="d-block w-100" />
                        </Col>
                        <Col md="6" className="mx-auto my-3">
                            <h6 className="text-uppercase">{label}</h6>
                            <h6 className="text-warning text-capitalize text-slanted">provided by {source}</h6>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary mt-2 text-capitalize"
                            >{source} webpage</a>

                            <a
                                href={shareAs}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success mt-2 mx-3 text-capitalize"
                            >Recipe url</a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">Ingredients</h2>
                                {
                                    this.state.ingredients.map((item, index) =>{
                                        return (
                                            <li key={index} className="list-group-item text-slanted">{item}</li>
                                        )
                                    })
                                }
                            </ul>

                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default RecipeDetails;