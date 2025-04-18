import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setType] = useState("rgb");
  const [color, setColor] = useState("");
  function generateColorHandler() {
    if (typeOfColor === "hex") {
      let hexColor = generateHexColor();
      setColor(hexColor);
    } else {
      let rgbColor = generateRgbColor();
      setColor(rgbColor);
    }
  }
  function generateRandom(len) {
    let ans = Math.floor(Math.random() * len);
    return ans;
  }

  function generateHexColor() {
    let hexArr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
    ];
    let len = hexArr.length;

    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
      hexColor += hexArr[generateRandom(len)];
    }
    return hexColor;
  }

  function generateRgbColor() {
    let r = generateRandom(255);
    let g = generateRandom(255);
    let b = generateRandom(255);
    let rgbColor = `rgb(${r},${g},${b})`;
    return rgbColor;
  }
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <div
        style={{
          width: "full",
          padding: "10px",
          gap: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={generateColorHandler}
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#50A394",
          }}
        >
          Generate Color
        </button>
        <button
          onClick={() => setType("hex")}
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#50A394",
          }}
        >
          Hex Color
        </button>
        <button
          onClick={() => setType("rgb")}
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#50A394",
          }}
        >
          Rgb Color
        </button>
      </div>
      <div
        style={{
          width: "full",
          height: "full",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>
          {color == "" ? "" : "color : "}
          {color}
        </h1>
      </div>
    </div>
  );
}
