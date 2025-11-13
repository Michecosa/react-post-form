import { useState } from "react";
import axios from "axios";

export default function Form() {
  const defaultFormData = {
    author: "",
    title: "",
    body: "",
    public: false,
  };

  const [formData, setFormData] = useState(defaultFormData);
}
