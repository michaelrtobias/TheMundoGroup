import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";

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

interface Image {
  signedRequest: string;
  url: string;
}

interface File {
  lastModified: string;
  lastModifiedDate: string;
  webkitRelativePath: string;
  name: string;
  type: string;
  size: string;
}

interface FileList {
  files: object;
}

const ContactUs: React.FC = () => {
  const [wishlistEntry, setWishlistEnty] = useState<Partial<Entry>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const history = useHistory();
  const [URL, setUrl] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [uploadInput, setUploadInput] = useState<any>([]);

  const handleFileSelected = (files: any) => {
    setUploadInput(files);
    console.log(files);
  };

  const uploadImage = () => {
    var file = uploadInput[0];
    console.log("file:");
    console.log(file);
    var fileParts = uploadInput[0].name.split(".");
    console.log("file parts: " + fileParts);
    var fileName = fileParts[0];
    console.log("filename: " + fileName);
    var fileType = fileParts[1];
    console.log("file type: " + fileType);

    let headersConfig = {
      headers: {
        "Content-Type": file.type,
      },
    };
    console.log("Preparing the upload");
    axios
      .post(
        "https://omv9j6woq7.execute-api.us-east-1.amazonaws.com/dev/wishlist/images",
        {
          fileName: file.name,
          fileType: file.type,
        },
        headersConfig
      )
      .then((response) => {
        var returnedData = response.data;
        var signedRequest = returnedData.signedRequest;
        var url = returnedData.url;
        setUrl(url);
        console.log("Recieved a signed request " + signedRequest);
        var options = {
          headers: {
            "Content-Type": file.type,
          },
        };
        axios
          .put(signedRequest, file, options)
          .then((result) => {
            console.log("Response from s3");
            setSuccess(true);
            alert("upload successful");
          })
          .then(() => {
            debugger;
            setWishlistEnty({
              ...wishlistEntry,
              image_URL: url,
            });
            debugger;
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((err) => {
        throw err;
      });
  };
  const addWishlistEntry = () => {
    setLoading(true);
    axios
      .post(
        "https://omv9j6woq7.execute-api.us-east-1.amazonaws.com/dev/wishlist",
        {
          first_name: wishlistEntry.first_name,
          last_name: wishlistEntry.last_name,
          email: wishlistEntry.email,
          phone: wishlistEntry.phone,
          type: wishlistEntry.type,
          make: wishlistEntry.make,
          model: wishlistEntry.model,
          description: wishlistEntry.description,
          image_URL: wishlistEntry.image_URL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
        //setError(true)
        setLoading(false);
      });
  };

  // const uploadImage = () => {

  // }

  useEffect(() => {
    const isEmailSet = !!wishlistEntry.email;
    const isPhoneSet = !!wishlistEntry.phone;
    setFormValid(isEmailSet && isPhoneSet);
  }, [wishlistEntry]);
  return (
    <BorderWrapper>
      <FormWrapper>
        <h2>Wishlist</h2>
        <p>Please fill out the form below to help us find your next piece</p>
        <Form onSubmit={() => addWishlistEntry()}>
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleFileSelected(e.target.files);
                    }}
                  ></Form.File>
                  <Form.Control.Feedback type="valid">
                    You did it!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={{ span: 5, offset: 1 }}>
                <Button variant="primary" onClick={(e) => uploadImage()}>
                  Upload Image
                </Button>
              </Col>
            </Form.Row>
          </Container>
          <Button
            variant="primary"
            type="submit"
            disabled={!formValid || loading}
            onClick={() => addWishlistEntry()}
          >
            Submit
          </Button>
        </Form>
      </FormWrapper>
    </BorderWrapper>
  );
};

export default ContactUs;
