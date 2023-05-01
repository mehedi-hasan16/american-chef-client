/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const ChefArea = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            {data.map(chef=><ChefCard key={chef.id} chef={chef}></ChefCard>)}
        </div>
    );
};

export default ChefArea;