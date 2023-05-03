/* eslint-disable react-hooks/exhaustive-deps */

import ChefCard from "../ChefCard/ChefCard";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const ChefArea = () => {
    const data = useLoaderData();
    console.log(data);
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