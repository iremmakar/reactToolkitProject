import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import useApi from "../../../hooks/useApi";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../../redux/authSlice";

const LoginPage = () => {
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const postData = {
        email: "c20@user.com",
        password: "123123",
      };
      const response = await api.post("auth/login", postData);
      console.log(response);
    })();
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    console.log(value);

    const postData = {
      email: "c20@user.com",
      password: "123123",
    };

    const loginResult = await api.post("auth/login", value);
    console.log(loginResult.data);

    if (loginResult.data.status === "success") {
      dispatch(setToken(loginResult.data.data.token));
      console.log(loginResult.data.data.token);
      dispatch(setUser(loginResult.data.data.userData));
    } else {
      alert("Lütfen kontol et");
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="12" md="12" lg="6">
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="loginForm.email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginForm.password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicCheckbox">
              <Button variant="primary " type="submit" className="w-100 mt-5">
                <i class="fa-solid fa-right-to-bracket"></i>
                &nbsp; Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
