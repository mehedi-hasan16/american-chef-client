/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import { Row } from "react-bootstrap";

const ChefArea = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-center mt-4">Choose Chef</h1>
            <Row xs={1} md={3}>
                {data.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)}
            </Row>
        </div>
    );
};

export default ChefArea;