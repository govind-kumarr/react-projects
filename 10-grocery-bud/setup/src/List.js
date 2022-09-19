import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, eiditItem }) => {
  return (
    <div className="grocery-list">
      {items.map(({ id, title }) => {
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={() => eiditItem(id)}>
                <FaEdit />
              </button>
              <button onClick={() => removeItem(id)} className="delete-btn">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
