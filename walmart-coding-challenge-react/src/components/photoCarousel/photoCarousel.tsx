import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const PhotoGallery = () => {

  return (
    <Carousel style={{ margin: "0px 15px", marginTop: "10px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.abcotvs.com/dip/images/10682486_052321-kabc-salutes-usc-graduate.jpg?w=800&r=16%3A9"
          alt="First slide"
        />

        <Carousel.Caption>
          <h1>Undergraduate Graduation</h1>
          <h5>Join us for the spring 2021 undergraduate graduation ceremony</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.cnbcfm.com/api/v1/image/105920053-1558114089674walmart.jpg?v=1558114680"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>New Campus</h1>
          <h5>
            Join us and in your professional developement at our new campus!
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://newsroom.unl.edu/announce/files/file132053.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Sign Up For Summer Session!</h1>
          <h5>
            Summer session registration is opening soon! We hope to see your
            cheerful faces on campus this summer!
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PhotoGallery;
