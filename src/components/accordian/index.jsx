import { useState } from "react";
import data from "./data";
import "./styles.css";
export function Accodian() {
  const [selected, setSeleceted] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function onClickHandler(id) {
    if (enableMulti) {
      onMultipleClickHandler(id);
    } else {
      onSigleClickhandler(id);
    }
  }
  function onMultipleClickHandler(id) {
    const copyMul = [...multiple];
    const index = copyMul.indexOf(id);

    if (index === -1) {
      copyMul.push(id);
    } else {
      copyMul.splice(index, 1);
    }

    setMultiple(copyMul);
  }
  function onSigleClickhandler(id) {
    setSeleceted(id == selected ? null : id);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        <div className="heading">
          <h1>accordian</h1>
          <div></div>
          <div>
            <button onClick={() => setEnableMulti(!enableMulti)}>
              {enableMulti ? (
                <h4>Disable Multiselect </h4>
              ) : (
                <h4>Enable MultiSelect</h4>
              )}
            </button>
          </div>
        </div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={() => {
                onClickHandler(dataItem.id);
              }}
              className="item"
              key={dataItem.id}
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMulti
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
