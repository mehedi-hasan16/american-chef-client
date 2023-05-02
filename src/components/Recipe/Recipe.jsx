/* eslint-disable react/prop-types */
import { Card, Col } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Recipe = ({ recipe }) => {
    
    const {id, name, picture, ingredients, rating, cooking_method}= recipe;
    return (
        <Col >
            <Card className="my-3">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div><span className="fw-bold">Ingredients:</span> {ingredients.map(n=> n +',').join(' ')}</div>
                        <div><span className="fw-bold">Method:</span> {cooking_method}</div>
                        <div><Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <span> {rating}</span></div>
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