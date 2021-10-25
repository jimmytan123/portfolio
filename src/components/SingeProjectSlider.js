import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SingeProjectSlider = ({ imgs, title, description }) => {
  //console.log(imgs);
  return (
    <>
      {imgs && (
        <section className="single-project-slider">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div>
            <Carousel showThumbs={false} showStatus={false}>
              {imgs.map((img, i) => {
                return (
                  <div key={i}>
                    <img src={img} alt="screenshots slider" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </section>
      )}
    </>
  );
};

export default SingeProjectSlider;
