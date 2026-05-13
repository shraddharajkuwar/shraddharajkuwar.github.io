import React, { useEffect, useRef, useState } from "react";

type SliderProps = {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
};

const ImageSlider: React.FC<SliderProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
}) => {
  const [index, setIndex] = useState(0);
  const length = images.length;
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto slide
  useEffect(() => {
    if (!autoPlay) return;

    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(slide);
  }, [autoPlay, interval, length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + length) % length);
  };

  return (
    <div className="slider-wrapper">
      <button className="arrow left" onClick={prevSlide}>
        ‹
      </button>

      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
          ref={sliderRef}
        >
          {images.map((img, i) => (
            <div className="slide" key={i}>
              <img src={img} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default ImageSlider;