import { useState } from "react";
import axios from "axios";

export default function Form({ endpoint }) {
  const defaultFormData = {
    author: "",
    title: "",
    body: "",
    public: false,
  };
  const [formData, setFormData] = useState(defaultFormData);

  function handleSubmit() {}
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Titolo:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Autore:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </label>
        <label>
          Body:
          <textarea name="body" value={formData.body} onChange={handleChange} />
        </label>
        <label>
          Public:
          <input
            type="checkbox"
            name="public"
            checked={formData.public}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
