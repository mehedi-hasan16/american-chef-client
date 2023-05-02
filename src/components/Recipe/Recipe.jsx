import { Card, Col } from "react-bootstrap";

const Recipe = ({ recipe }) => {
    
    const {id, name, picture, ingredients, rating, cooking_method}= recipe;
    return (
        <Col >
            <Card className="my-3">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div>ingredients: {ingredients}</div>
                        <div>Method: {cooking_method}</div>
                        <div>{rating}</div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div>icon</div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Recipe;