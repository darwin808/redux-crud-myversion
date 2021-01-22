import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  addpeople,
  deletepeople,
  updatepeople,
} from "./actions";

function App() {
  const [name, setname] = useState("");
  const [edit, setedit] = useState("");
  const [modal, setmodal] = useState(false);
  const [idholder, setidholder] = useState(0);

  const counter = useSelector((e) => e.counterReducer);
  const showpeople = useSelector((e) => e.peopleReducer);
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addpeople({ name, id: Math.random() }));
    console.log(showpeople);
  };

  const dele = (id) => {
    dispatch(deletepeople(id));
  };

  const openmodal = (id) => {
    setmodal(true);
    setidholder(id);
  };

  const handledit = (e) => {
    e.preventDefault();
    dispatch(updatepeople({ idholder, edit }));
  };
  return (
    <div className="App">
      <h1>hellow</h1>

      {counter}
      <button
        onClick={() => {
          dispatch(increment());
        }}>
        ADD
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        DECREMENT
      </button>

      <form action="submit" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </form>

      {modal && (
        <form action="submit" onSubmit={handledit}>
          <input
            type="text"
            value={edit}
            onChange={(e) => {
              setedit(e.target.value);
            }}
          />
        </form>
      )}

      {showpeople.articles.map((e) => (
        <div key={e.id}>
          {e.name}{" "}
          <button
            onClick={() => {
              dele(e.id);
            }}>
            dele
          </button>
          <button
            onClick={() => {
              openmodal(e.id);
            }}>
            edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
