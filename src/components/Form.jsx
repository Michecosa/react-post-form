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
  function handleChange() {}

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
        <div>
          <legend>Visibilità</legend>
          <label>
            Privato
            <input
              type="radio"
              name="radio"
              value="private"
              checked={formData.public === "private"}
              onChange={handleChange}
            />
          </label>
          <label>
            Pubblico
            <input
              type="radio"
              name="radio"
              value="public"
              checked={formData.public === "public"}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
}
