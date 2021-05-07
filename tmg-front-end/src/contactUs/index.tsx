import React, { useState, useEffect } from "react";
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

interface Entry {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  type: string;
  make: string;
  model: string;
  description: string;
  image_URL: string;
}

const ContactUs: React.FC = () => {
  // const [first_name, setFirstName] = useState("brian");
  // const [last_name, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [type, setType] = useState("");
  // const [make, setMake] = useState("");
  // const [model, setModel] = useState("");
  // const [description, setDescription] = useState("");
  // const [image_URL, setImageURL] = useState("");

  const [wishlistEntry, setWishlistEnty] = useState<Partial<Entry>>({});

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
                type="text"
                value={wishlistEntry.first_name || ""}
                placeholder="Enter First Name"
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    first_name: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={wishlistEntry.last_name || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    last_name: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={wishlistEntry.email || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    email: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter Phone Number"
                value={wishlistEntry.phone || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    phone: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.Label>What type of goods are you looking for?</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Type..."
                value={wishlistEntry.type || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    type: e.target.value,
                  })
                }
              >
                <option>Type...</option>
                <option>Watch</option>
                <option>Parts & Accessories</option>
                <option>Diamonds</option>
                <option>Bracelets</option>
                <option>Gold Link</option>
                <option>Belts & Buckels</option>
                <option>Leather Goods</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formMake">
              <Form.Label>Make or Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Make"
                value={wishlistEntry.make || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    make: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formModel">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Model"
                value={wishlistEntry.model || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    model: e.target.value,
                  })
                }
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
                type="text"
                placeholder="Enter Description"
                value={wishlistEntry.description || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row></Form.Row>
          <Container>
            <Form.Row>
              <Col md={4}>
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
};

export default ContactUs;
