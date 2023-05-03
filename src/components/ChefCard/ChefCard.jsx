/* eslint-disable react/prop-types */
import { Button, Card, Col } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
    const { id, name, picture, years_of_experience, num_recipes, rating } = chef;
    return (

        <Col>
            <Card className="my-3">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div><span className="fw-bold">Year of expricens:</span> {years_of_experience}</div>
                        <div><span className="fw-bold">Number of recipies:</span> {num_recipes}</div>
                        <div>
                            <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                            <span> {rating}</span>
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`chef/${id}`}><Button className="btn-danger">View Recipes</Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ChefCard;