import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.isLoading);

  function editItem(id) {
    navigate(`/edit/${id}`);
  }
  function deleteItem(id) {
    axios.delete(`http://localhost:8080/api/items/${id}`);
    getData();
  }
  return loading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="wrapper">
      <nav>
        <b>Logo</b>
        <button onClick={() => navigate("/create")}>Add</button>
      </nav>
      <div className="container">
        {data.map((item) => (
          <div className="card" key={item._id}>
            <div className="card-img">
              <img src={item.imageURL} alt="" />
            </div>
            <b>{item.title}</b>
            <p>{item.description}</p>
            <div className="actions">
              <button onClick={() => deleteItem(item._id)}>Delete</button>
              <button onClick={() => editItem(item._id)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
