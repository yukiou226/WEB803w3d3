import { useState } from "react";
import { Modal, Container, Row, Col, Card, Button } from "react-bootstrap";
import { faPlusCircle, faMinusCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DisplayProducts(props) {
    const [show, setShow] = useState(false);
    const [activeProduct, setActiveProduct] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setShow(true);
        setActiveProduct(product);
    };

    return (
        <Container className="py-4">
            <Row xs={1} md={2} lg={4} className="g-4">
        {props.products.map(product => (
                <Col key={product.id}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>{product.desc}</Card.Title>
                            <div
                                className="product-image-wrap mb-3"
                                role="button"
                                onClick={() => handleShow(product)}
                                onKeyDown={(e) => e.key === 'Enter' && handleShow(product)}
                                tabIndex={0}
                            >
                                <img
                                    src={product.image}
                                    width="150"
                                    alt={product.desc}
                                    className="img-fluid rounded cursor-pointer"
                                />
                                <span className="product-info-hint">
                                    <FontAwesomeIcon icon={faInfoCircle} /> Click for details
                                </span>
                            </div>
                            <div className="d-flex align-items-center flex-wrap gap-2">
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="btn-icon"
                                    onClick={() => props.onDecrement(product)}
                                    aria-label="Decrease quantity"
                                >
                                    <FontAwesomeIcon icon={faMinusCircle} className="fa-lg" />
                                </Button>
                                <span id={`qty-${product.id}`} className="px-3 py-2 border rounded d-inline-block">
                                    {product.value}
                                </span>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="btn-icon"
                                    onClick={() => props.onIncrement(product)}
                                    aria-label="Increase quantity"
                                >
                                    <FontAwesomeIcon icon={faPlusCircle} className="fa-lg" />
                                </Button>
                                <span className="text-muted small">Quantity</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{activeProduct.desc}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                    src={activeProduct.image}
                    width="350"
                    alt={activeProduct.desc}
                    className="d-block mx-auto mb-3 img-fluid rounded"
                />
                <p className="mb-0"><strong>Description:</strong> {activeProduct.desc}</p>
            </Modal.Body>
        </Modal>
        </Container>
    )
}