import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./stylesCarrusel.css";

const imageArr = [
  {
    imgId: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVpMKBQ0yNnuCfA3XFZMn-149_8JRAtVjIA&usqp=CAU",
  },
  { imgId: 2, image: "https://www.ecartelera.com/images/sets/44200/44256.jpg" },
  { imgId: 3, image: "https://gcdn.emol.cl/cine/files/2019/09/megan-fox.jpg" },
  {
    imgId: 4,
    image: "https://amqueretaro.com/wp-content/uploads/2020/05/MARGOT.jpg",
  },
];

export const Carrusel = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const length = imageArr.length;

  if (!Array.isArray(imageArr) || imageArr.length <= 0) {
    return <p>Has de carregar imatges</p>;
  }

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  // console.log(currentImg);

  return (
    <>
      <h1>Carrusel</h1>
      <div className="carrusel">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {imageArr.map((img, index) => {
          return (
            <>
              {index === currentImg && (
                <img
                  className="img-carrusel"
                  key={img.imgId}
                  src={img.image}
                  alt="celebrities"
                />
              )}
            </>
          );
        })}
      </div>
    </>
  );
};
