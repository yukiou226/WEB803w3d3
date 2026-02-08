import React from "react";
import { Container, Card, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart(props) {
    const cartItems = props.prods.filter(prod => prod.value > 0);
    const totalValue = props.prods.reduce((acc, p) => acc + p.value, 0);

    return (
        <Container className="mt-4">
            <h2 className="mb-4">
                <FontAwesomeIcon icon={faShoppingBag} className="me-2 cart-title-icon" />
                Your Cart Items
            </h2>
            {cartItems.length === 0 ? (
                <>
                    <p className="text-muted">Your cart has {totalValue} item(s).</p>
                    <Button as={Link} to="/" variant="primary">
                        Continue Shop
                    </Button>
                </>
            ) : (
                <>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {cartItems.map(prod => (
                            <Col key={prod.id}>
                                <Card className="h-100 cart-card">
                                    <Card.Img variant="top" src={prod.image} alt={prod.desc} className="cart-img" />
                                    <Card.Body>
                                        <Card.Title>{prod.desc}</Card.Title>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem className="px-0 qty">
                                                <strong>Quantity:</strong> {prod.value}
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="mt-4">
                        <Button
                            as={Link}
                            to={props.isLoggedIn ? "/checkout" : "/signin"}
                            variant="primary"
                            size="lg"
                        >
                            Check Out
                        </Button>
                    </div>
                </>
            )}
        </Container>
    );
}
