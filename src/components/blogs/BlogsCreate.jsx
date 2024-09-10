import React, { useState } from "react";
import { useGetValeu } from "../../hooks/useGetValue";
const initialState = {
  title: "title",
  desc: "desc",
  price: "price",
};
const BlogsCreate = () => {
  const { formData, hendleChange } = useGetValeu(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          value={formData.title}
          onChange={hendleChange}
          name="title"
          type="text"
          placeholder="title"
        />
        <input
          value={formData.desc}
          onChange={hendleChange}
          name="desc"
          type="text"
          placeholder="desc"
        />
        <input
          value={formData.price}
          onChange={hendleChange}
          name="price"
          type="text"
          placeholder="price"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default BlogsCreate;
