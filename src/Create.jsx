import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  function createItem(data) {
    axios
      .post("https://crud-backend-red.vercel.app/api/items", data)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="create-wrapper">
      <form onSubmit={handleSubmit(createItem)}>
        <button type="button" onClick={() => navigate("/")}>
          Orqaga
        </button>
        <input type="text" {...register("title")} placeholder="Title" />
        <input
          type="text"
          {...register("description")}
          placeholder="Description"
        />
        <input type="text" {...register("imageURL")} placeholder="Image URL" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Create;
