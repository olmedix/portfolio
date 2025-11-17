import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./carousel.css";

export function Carousel({ images, imageNumber, setImageNumber }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();

    setImageNumber((prev) => {
      if (prev > 0) return prev - 1;
      return 0;
    });
  }, [emblaApi, setImageNumber]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();

    setImageNumber((prev) => {
      if (prev < images.length - 1) return prev + 1;
      return prev; // o 0 si quieres que haga loop
    });
  }, [emblaApi, setImageNumber, images.length]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((url, i) => (
            <div className="embla__slide" key={i}>
              <img className="box__image" src={url} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
      >
        ◀
      </button>
      <button
        className="embla__button embla__button--next"
        onClick={scrollNext}
      >
        ▶
      </button>
    </div>
  );
}
