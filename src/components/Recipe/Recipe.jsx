/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const [like, setLike] = useState(true)
    console.log(like);

    const handelLike = () => {
        setLike(false);
        toast("You have liked");
    }
    console.log(like);

    const { name, picture, ingredients, rating, cooking_method } = recipe;
    return (
        <Col >
            <Card className="my-3">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div><span className="fw-bold">Ingredients:</span> {ingredients.map(n => n + ',').join(' ')}</div>
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

                    <Button onClick={handelLike} disabled={!like} className="bg-danger border border-0 rounded-circle">
                        <span>
                            {like ? <FaRegHeart></FaRegHeart> : <FaHeart></FaHeart>}
                        </span>
                    </Button>

                    <ToastContainer
                        position="top-center" />
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Recipe;