import useEmblaCarousel from "embla-carousel-react";
import './carousel.css';

export function Carousel({ images }) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((url, i) => (
          <div className="embla__slide" key={i}>
            <img className="box__image" src={url} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
