import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/slider1.jpg'
import img2 from '../../assets/slider2.jpg'
import img3 from '../../assets/slider3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel className='container'>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Unleash your inner chef</h1>
          <p>The website might offer a range of recipes, cooking tips, and instructional videos that inspire users to try new techniques and explore new flavors.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Bringing the world to your plate</h1>
          <p>The website might feature recipes from different regions, along with information on traditional cooking methods and ingredients.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Cooking made easy</h1>
          <p>
          The website might feature quick and easy recipes, step-by-step instructions, and helpful tips and tricks for preparing meals in a hurry
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;