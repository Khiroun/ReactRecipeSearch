import React, {Component} from 'react';
import {Col, Card, CardImg, CardBody, CardFooter, Button} from "reactstrap";

class Recipe extends Component {
    render() {
        const {image, label, shareAs, source} = this.props.recipe;
        const {handleDetails} = this.props;
        return (
            <React.Fragment>
                <Col md="4">
                    <Card>
                        <CardImg top src={image} alt={label}/>
                        <CardBody className="text-capitalize">
                            <h6>{label}</h6>
                            <h6 className="text-slanted text-warning">
                                provided by {source}
                            </h6>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm" onClick={handleDetails} >Details</Button>
                            <a
                                href={shareAs}
                                className="btn btn-success text-capitalize mx-2 btn-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                recipe url
                            </a>
                        </CardFooter>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}

export default Recipe;