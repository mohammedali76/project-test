import React, { useState, useEffect } from "react";
import beach from "./image/beach.jpg";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const UserList = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="container">
        <div className="beach">
          <img src={beach} alt="100" height="100%" width="80%" />
        </div>
        <div className="app">
          <figure>
            <figcaption>Add your User List</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="users List"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            ></input>
            <i
              className="fa fa-plus add-btn"
              title="ADD USER"
              onClick={addItem}
            />
          </div>
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <i className="far fa-trash-alt add-btn" title="Delete" />
                </div>
              );
            })}
          </div>
          {/* clear all button */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="remove All" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
