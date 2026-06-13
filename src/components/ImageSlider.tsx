import React, { useEffect, useRef, useState } from "react";

type SliderProps = {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  imagesPerSlide?: number;
};

const ImageSlider: React.FC<SliderProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
  imagesPerSlide = 1,
}) => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Group images based on imagesPerSlide
  const groupedImages: string[][] = [];

  for (let i = 0; i < images.length; i += imagesPerSlide) {
    groupedImages.push(images.slice(i, i + imagesPerSlide));
  }

  const length = groupedImages.length;

  // Auto slide
  useEffect(() => {
    if (!autoPlay || length <= 1) return;

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
          ref={sliderRef}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {groupedImages.map((group, slideIndex) => (
            <div className="slide" key={slideIndex}>
              {group.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`slide-${slideIndex}-${imgIndex}`}
                  className="slide-image"
                />
              ))}
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