import errorPic from '../../assets/error.jpg'

const NotFound = () => {
    return (
        <div className='min-vh-100 d-flex justify-content-center align-items-center'>
            <div>
            <img className='rounded' src={errorPic} alt="" />
            <h1 className='text-center my-2'>Page Not Found</h1>
            </div>
        </div>
    );
};

export default NotFound;