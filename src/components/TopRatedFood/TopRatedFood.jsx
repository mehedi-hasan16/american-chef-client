import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const TopRatedFood = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        fetch('https://american-recipe-server.vercel.app/topFood')
        .then(res=>res.json())
        .then(data=>setData(data))
        setIsLoading(false);
    },[])
    return (
        <div className="container mb-4">
            <h1 className="my-4 text-center">Top Rated Food</h1>
            {isLoading ? <LoadingSpinner /> : ''}
            <Row xs={1} md={3} className="g-4">
            {
                data.map(n=><Col key={n.id}>
                    <Card>
                      <Card.Img variant="top" src={n.picture} />
                      <Card.Body>
                        <Card.Title className="text-center">Name: {n.name}</Card.Title>
                        <Card.Text className="text-center">View: <FaEye></FaEye> {n.likes}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>)
            }
            </Row>
        </div>
    );
};

export default TopRatedFood;