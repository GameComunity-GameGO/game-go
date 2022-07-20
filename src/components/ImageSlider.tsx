import { useEffect, useState } from "react";
import styled from "styled-components";
import useInterval from "../hooks/useInterval";
import { images } from "../utils/images";
const Slider = styled.div<{ bgphoto: string }>`
  height: 60vh;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  align-items: center;
`;
const SliderIndex = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 30px;
  margin-right: 10px;
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li<{ match: string }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${(props) => props.match};
  cursor: pointer;
  margin-right: 10px;
`;
const SlideBtn = styled.div`
  svg {
    height: 30px;
    cursor: pointer;
    position: absolute;
    margin: 0px 15px;
  }
  svg:first-child {
    left: 0;
  }
  svg:last-child {
    right: 0;
  }
`;
function ImageSlider() {
  const [activeIndex, setactiveIndex] = useState(0);

  const nextSlide = () => {
    if (activeIndex < 2) setactiveIndex(activeIndex + 1);
    else setactiveIndex(0);
  };
  const prevSlide = () => {
    if (activeIndex > 0) setactiveIndex(activeIndex - 1);
    else setactiveIndex(2);
  };
  useInterval(() => {
    nextSlide();
  }, 8000);
  return (
    <Slider bgphoto={images[activeIndex]}>
      <SlideBtn>
        <svg
          onClick={prevSlide}
          fill="white"
          viewBox="0 0 256 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          onClick={nextSlide}
          fill="white"
          viewBox="0 0 256 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
          />
        </svg>
      </SlideBtn>
      <SliderIndex>
        <Ul>
          {images.map((_data, index) => (
            <Li
              key={index}
              onClick={() => setactiveIndex(index)}
              match={Number(index) === activeIndex ? "#F7F7F7" : "#6B645D"}
            ></Li>
          ))}
        </Ul>
      </SliderIndex>
    </Slider>
  );
}

export default ImageSlider;
