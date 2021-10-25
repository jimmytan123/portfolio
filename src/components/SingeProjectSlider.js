import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SingeProjectSlider = ({ imgSlider }) => {
  //console.log(imgSlider);
  return (
    <>
      {imgSlider && (
        <section className="single-project-slider">
          <div>
            {imgSlider.sliderTitle && <h2>{imgSlider.sliderTitle}</h2>}
            {imgSlider.sliderDescription && (
              <p>{imgSlider.sliderDescription}</p>
            )}
          </div>
          <div>
            <Carousel showThumbs={false} showStatus={false}>
              {imgSlider.imgs.map((img, i) => {
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
