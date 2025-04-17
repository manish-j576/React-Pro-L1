import { useState } from "react";
import data from "./data";
import "./styles.css";
export function Accodian() {
  const [selected, setSeleceted] = useState(null);

  function onSigleClickhandler(id) {
    console.log("single onclick handler");
    setSeleceted(id == selected ? null : id);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        <div className="heading">
          <h1>accordian</h1>
          <div></div>
        </div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={() => {
                onSigleClickhandler(dataItem.id);
              }}
              className="item"
              key={dataItem.id}
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
