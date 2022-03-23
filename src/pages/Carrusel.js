import React from "react";

const imageArr = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVpMKBQ0yNnuCfA3XFZMn-149_8JRAtVjIA&usqp=CAU",
  "https://www.ecartelera.com/images/sets/44200/44256.jpg",
  "https://gcdn.emol.cl/cine/files/2019/09/megan-fox.jpg",
  "https://amqueretaro.com/wp-content/uploads/2020/05/MARGOT.jpg",
];

export function Carrusel() {
  return (
    <>
      <button>&lt;</button>
      <img src={imageArr[0]} alt="celebrity"></img>
      <button>&gt;</button>
    </>
  );
}
