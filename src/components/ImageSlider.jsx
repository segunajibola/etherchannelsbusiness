import { useState, useEffect } from "react";

const sliderStyles = {
  width: "100%",
  position: "relative",
  height: "100%",
  marginLeft: "auto",
  marginRight: "auto",
};

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "top",
  marginLeft: "auto",
  marginRight: "auto",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#2b4b77",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#2b4b77",
  zIndex: 1,
  cursor: "pointer",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "10px",
  //   color: `${slideIndex} ? "red" : "green"`,
};

const text = {
  fontSize: "300px",
  fontColor: "red",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  useEffect(() => {
    setTimeout(() => {
      goToNext();
    }, 6000);
  });

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
        <div style={text} className="text-7xl text-red-500">
          {slides.title}
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
           ● {/* <div>{slide.title}</div> */}
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
