import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, "danger", "Please Enter Value");
    } else if (name && isEdit) {
      //deal with edit
      setList(
        list.map((item) => {
          if (item.id === editId) return { ...item, title: name };
          return item;
        })
      );
    } else {
      //show alert
      const newItem = {
        id: Date.now(),
        title: name,
      };
      setList([...list, newItem]);
      showAlert(true, "success", "Item Added");
      setName("");
    }
    setName("");
    setEditId(null);
    setIsEdit(false);
    showAlert(true, "success", "Item Edited");
  };
  const clearList = () => {
    showAlert(true, "danger", "deleted all items");
    setList([]);
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item romoved");
    setList(list.filter(({ id }) => id != id));
  };
  const eiditItem = (id) => {
    const specificItem = list.find(({ id }) => id === id);
    setIsEdit(true);
    setEditId(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list={list} removeAlert={showAlert} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "Edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} eiditItem={eiditItem} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
