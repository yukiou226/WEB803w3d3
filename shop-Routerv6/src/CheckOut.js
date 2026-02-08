import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckOut.css";

export default function CheckOut(props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.userData) {
            navigate("/signin", { replace: true });
        }
    }, [props.userData, navigate]);

    if (!props.userData) {
        return null;
    }

    return (
        <Container className="mt-4 checkout-welcome-container">
            <Card className="checkout-welcome-card shadow-sm">
                <Card.Header className="checkout-welcome-header">
                    <h2 className="mb-0">Check Out</h2>
                </Card.Header>
                <Card.Body className="checkout-welcome-body">
                    <p className="welcome-back mb-2">
                        <FontAwesomeIcon icon={faUser} className="me-2 welcome-icon" />
                        <span className="welcome-text">
                            Welcome Back {props.userData.name}!
                        </span>
                    </p>
                    <p className="mb-0">
                        <Link to="/cart" className="time-to-checkout-link">
                            Time to check out?
                        </Link>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
}
