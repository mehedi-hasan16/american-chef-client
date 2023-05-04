/* eslint-disable react-hooks/exhaustive-deps */

import ChefCard from "../ChefCard/ChefCard";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useEffect, useState } from "react";

const ChefArea = () => {
    const [isLoading, setIsLoading] = useState(true);
    const data = useLoaderData();
    useEffect(() => {
        setIsLoading(false);
    }, []);
    return (
        <div className="container">
            <h1 className="text-center mt-4">Choose Chef</h1>
            {isLoading ? <LoadingSpinner /> : ''}
            <Row xs={1} md={3}>
                {data.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)}
            </Row>
        </div>
    );
};

export default ChefArea;