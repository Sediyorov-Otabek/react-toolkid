import { useState } from "react";

export const useGetValeu = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const hendleChange = (e) => {
    let [name, value] = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };
  return {
    formData,
    hendleChange,
    setFormData,
  };
};
