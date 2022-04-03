import React from "react";
import { useState } from "react";
import "./stylesGroupButton.css";

export const GroupButton = () => {
  const [text, setText] = useState("cap");

  const mostrarText = (textButton) => {
    setText(textButton);
  };

  return (
    <div className="group-button-container">
      <h1>Group Button</h1>
      <div className="group-button">
        <button
          className="square-button"
          // ESTADO DERIVADO
          // style={{ background: (text === "Text A" ? "pink" : "" )}}
          style={{ background: text === "Text A" ? "pink" : "" }}
          onClick={() => mostrarText("Text A")}
        >
          Text A
        </button>
        <button
          className="square-button"
          style={{ background: text === "Text B" ? "pink" : "" }}
          onClick={() => mostrarText("Text B")}
        >
          Text B
        </button>
        <button
          className="square-button"
          style={{ background: text === "Text C" ? "pink" : "" }}
          onClick={() => mostrarText("Text C")}
        >
          Text C
        </button>
      </div>
      <div className="text-mostrar-container">{text}</div>
    </div>
  );
};

// export const GroupButton = () => {
//   const [text, setText] = useState("cap");
//   const [color1, setColor1] = useState("");
//   const [color2, setColor2] = useState("");
//   const [color3, setColor3] = useState("");

//   const mostrarText = (textButton, color1, color2, color3) => {
//     setText(textButton);
//     setColor1(color1);
//     setColor2(color2);
//     setColor3(color3);
//   };

//   return (
//     <div className="group-button-container">
//       <div className="group-button">
//         <button
//           className="square-button"
//           style={{ background: color1 }}
//           onClick={() => mostrarText("Text A", "cyan", "", "")}
//         >
//           Text A
//         </button>
//         <button
//           className="square-button"
//           style={{ background: color2 }}
//           onClick={() => mostrarText("Text B", "", "yellow", "")}
//         >
//           Text B
//         </button>
//         <button
//           className="square-button"
//           style={{ background: color3 }}
//           onClick={() => mostrarText("Text C", "", "", "pink")}
//         >
//           Text C
//         </button>
//       </div>
//       <div className="text-mostrar-container">{text}</div>
//     </div>
//   );
// };
