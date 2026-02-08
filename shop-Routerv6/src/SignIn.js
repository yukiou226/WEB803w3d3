import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { Container, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignIn.css";

const FB_APP_ID = "1227049546045489";

export default function SignIn(props) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const responseFacebook = (response) => {
        if (response.accessToken) {
            props.onLoginSuccess({
                id: response.id,
                name: response.name,
                email: response.email,
                picture: response.picture?.data?.url || "",
            });
            navigate("/checkout");
        }
    };

    const handleRegularLogin = (e) => {
        e.preventDefault();
        if (name.trim()) {
            props.onLoginSuccess({
                id: null,
                name: name.trim(),
                email: email.trim() || "",
                picture: "",
            });
            navigate("/checkout");
        }
    };

    return (
        <Container className="mt-4 signin-container">
            <h2 className="mb-2 signin-title">Sign In</h2>
            <p className="text-dark mb-4 signin-instruction">Please login using one of the following:</p>
            <Card className="signin-card shadow-sm">
                <Card.Body className="signin-card-body p-4">
                    <Form onSubmit={handleRegularLogin}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="success" type="submit" className="btn-login mb-4">
                            Login
                        </Button>
                    </Form>
                    <div className="fb-login-wrapper">
                        <FacebookLogin
                            appId={FB_APP_ID}
                            autoLoad={false}
                            scope="public_profile,email"
                            fields="name,email,picture"
                            callback={responseFacebook}
                            cssClass="btn-fb-login"
                            icon="fa-facebook"
                            textButton=" LOGIN WITH FACEBOOK"
                        />
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}
