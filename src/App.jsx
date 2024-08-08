import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Edit from "./Edit";
import { useDispatch } from "react-redux";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  function getData() {
    dispatch({ type: "SET_LOADING", payload: true });
    axios
      .get("http://localhost:8080/api/items")
      .then((response) => {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_ERROR", payload: false });
        dispatch({ type: "SET_DATA", payload: response.data });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({ type: "SET_ERROR", payload: true });
      });
  }
  useEffect(() => {
    getData();
  }, [path]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default App;
