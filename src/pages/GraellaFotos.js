import React, { useState } from "react";
import "../App.css";

const imageArr = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVpMKBQ0yNnuCfA3XFZMn-149_8JRAtVjIA&usqp=CAU",
  "https://www.ecartelera.com/images/sets/44200/44256.jpg",
  "https://gcdn.emol.cl/cine/files/2019/09/megan-fox.jpg",
  "https://amqueretaro.com/wp-content/uploads/2020/05/MARGOT.jpg",
];

export function GraellaFotos() {
  const [gran, setGran] = useState(false);

  if (gran)
    return (
      <div className="full-screen">
        <img src={gran} alt="celebrities" onClick={() => setGran(false)} />
      </div>
    );

  return (
    <div className="container">
      {imageArr.map((image) => (
        <picture key={image}>
          <img src={image} alt="celebrities" onClick={() => setGran(image)} />
        </picture>
      ))}
    </div>
  );
}

/*MY EXERCISE
const imageArr = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVpMKBQ0yNnuCfA3XFZMn-149_8JRAtVjIA&usqp=CAU",
  "https://www.ecartelera.com/images/sets/44200/44256.jpg",
  "https://gcdn.emol.cl/cine/files/2019/09/megan-fox.jpg",
  "https://amqueretaro.com/wp-content/uploads/2020/05/MARGOT.jpg",
];

export function GraellaFotos() {
  const [imgClassName, setImgClassName] = useState("");
  const [imgClicked, setImgClicked] = useState(null);

  const newDisplay = (e) => {
    setImgClicked(e.target.src);
    if (imgClassName === "") {
      setImgClassName("full-screen");
    }
    if (imgClassName === "full-screen") {
      setImgClassName("");
    }
  };

  return (
    <div className="container">
      {imageArr.map((image) => (
        <picture key={image}>
          <img
            className={image === imgClicked ? imgClassName : ""}
            src={image}
            alt="img"
            onClick={newDisplay}
          ></img>
        </picture>
      ))}
    </div>
  );
}
*/
