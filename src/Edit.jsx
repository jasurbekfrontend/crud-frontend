import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.data);
  const editingData = data.find((data) => data._id === id);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: editingData,
  });
  console.log(data);
  console.log(editingData);
  useEffect(() => {
    if (editingData) {
      reset(editingData);
    }
  }, [editingData, reset]);

  function editItem(data) {
    axios
      .put(`https://crud-backend-red.vercel.app/api/items/${data._id}`, data)
      .then((response) => {
        console.log(response);
        navigate("/");
      });
  }

  return (
    <div className="edit-wrapper">
      <form onSubmit={handleSubmit(editItem)}>
        <button type="button" onClick={() => navigate("/")}>
          Orqaga
        </button>
        <input type="text" {...register("title")} />
        <input type="text" {...register("description")} />
        <input type="text" {...register("imageURL")} />
        <button>Update</button>
      </form>
    </div>
  );
};

export default Edit;
