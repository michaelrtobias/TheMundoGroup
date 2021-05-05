import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const FormWrapper = styled.div`
  border-width: 1rem 1rem 0;
  border-radius: 8px 8px 0 0;
  padding-left: 15px;
  padding-right: 15px;
  border: 0.2rem solid #ececec;
`;
const BorderWrapper = styled.div`
  padding: 10px;
`;

export default function ContactUs() {
  return (
    <BorderWrapper>
      <FormWrapper>
        <h2>Wishlist</h2>
        <p>Please fill out the form below to help us find your next piece</p>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="string"
                placeholder="Enter First Name"
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="string"
                placeholder="Enter Last Name"
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter Phone Number"
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.Label>What tye of goods are you looking for?</Form.Label>
              <Form.Control as="select" defaultValue="Type..."></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formMake">
              <Form.Label>Make or Brand</Form.Label>
              <Form.Control
                type="string"
                placeholder="Enter Make"
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formModel">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="string"
                placeholder="Enter Model"
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formDescription">
              <Form.Label>
                Add any extra details about item. Bracelets, Materials, Dials,
                Bezel, etc...
              </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Enter Description"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row></Form.Row>
          <Container>
            <Form.Row>
              <Col md={3}>
                <Form.Group as={Col} controlId="formMake">
                  <Form.File
                    id="productFormImageUplaod"
                    label="Upload an image of product"
                  ></Form.File>
                  <Form.Control.Feedback type="valid">
                    You did it!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <Button variant="primary" type="submit">
                  Upload Image
                </Button>
              </Col>
            </Form.Row>
          </Container>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </FormWrapper>
    </BorderWrapper>
  );
}
