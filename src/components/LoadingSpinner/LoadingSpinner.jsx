

const LoadingSpinner = () => {
    return (
        <div>

            <div className='container d-flex justify-content-center my-4 '>
                <div className="spinner-border text-primary mx-auto" role="status">
                    <span className="visually-hidden">Loading...</span></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;