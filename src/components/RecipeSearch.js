import React, {Component} from 'react';
import {Container, Row, Col, Form, InputGroup, Label, Input, Button, InputGroupText} from "reactstrap";

class RecipeSearch extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md="10" className="mx-auto my-5 text-center col-10">
                            <h1 className="text-slanted text-capitalize">
                                Search For recipes with{" "}
                                <strong className="text-danger">Samira tv</strong>
                            </h1>
                            <Form>
                                <Label for="search" className="text-capitalize">type recipes separated by comma</Label>
                                <InputGroup>
                                    <Input type="text" name="search" placeholder="chicken, onion, carrots" />
                                    <div className="input-group-append">
                                        <Button className="bg-primary text-white input-group-text">
                                            <i className="fas fa-search"></i>
                                        </Button>
                                    </div>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default RecipeSearch;