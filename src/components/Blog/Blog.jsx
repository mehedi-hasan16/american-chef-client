/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const ref = React.createRef();
const Blog = () => {
    const [isLoading, setIsLoading] = useState(true);
    const data = useLoaderData();
    useEffect(() => {
        setIsLoading(false);
    }, []);


    return (
        <div className='container'>
            <div>
            {isLoading ? <LoadingSpinner /> : ''}
            </div>
            <div className="text-center mt-3">
                <Pdf targetRef={ref} filename="blog-page.pdf">
                    {({ toPdf }) => <button className="btn btn-danger" onClick={toPdf}>Download PDF</button>}
                </Pdf>
            </div>
            <div ref={ref}>
                {
                    data.map(n => <div key={n.id}>
                        <div className='my-4 border p-4 rounded'>
                            <div><span className='fw-bold'>Question: </span>{n.question}</div>
                            <div><span className='fw-bold'>Answer: </span>{n.answer}</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;