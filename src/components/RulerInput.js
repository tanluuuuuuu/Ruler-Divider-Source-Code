import React from "react";
import {
    Row,
    Col,
    Form,
    Button,
    Container,
    Alert,
} from "react-bootstrap";

const RulerInput = ({ line, ruler, setSubmitData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitData({
            line: parseInt(line.lineHeight) * 20,
            ruler: parseInt(ruler.rulerWidth),
        });
    };

    return (
        <Container className="mt-3">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Line Height</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter line height"
                                value={line.lineHeight}
                                onChange={(e) =>
                                    line.setLineHeight(e.target.value)
                                }
                                min={0}
                                max={20}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Ruler Width</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter ruler width"
                                value={ruler.rulerWidth}
                                onChange={(e) =>
                                    ruler.setRulerWidth(e.target.value)
                                }
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="secondary" type="submit">
                    Draw 
                </Button>
            </Form>
            <Alert variant={"warning"} className="text-center mt-2">
                The longer line height, the longer it takes to draw
            </Alert>
        </Container>
    );
};

export default RulerInput;
