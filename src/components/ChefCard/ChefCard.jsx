import { Button, Card, Col } from "react-bootstrap";

const ChefCard = ({ chef }) => {
    const { id, name, picture, years_of_experience, num_recipes, rating } = chef;
    return (
    
            <Col>
                <Card className="my-3">
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <div>Year of expricens: {years_of_experience}</div>
                            <div>Number of recipies: {num_recipes}</div>
                            <div>{rating}</div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button >click </Button>
                    </Card.Footer>
                </Card>
            </Col>
    );
};

export default ChefCard;