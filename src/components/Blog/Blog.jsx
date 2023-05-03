/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const ref = React.createRef();
const Blog = () => {

    const data = useLoaderData();


    return (
        <div className='container'>
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