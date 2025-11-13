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
  const [message, setMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(endpoint, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setMessage({
            message: "Daje",
            type: "success",
          });
          setFormData(defaultFormData);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setMessage({ message: err.message, type: "danger" });
      });
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <div>
      {message && (
        <p style={{ color: message.type === "success" ? "green" : "red" }}>
          {message.message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Titolo:
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Autore:
          <input
            id="author"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </label>
        <label>
          Body:
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
        </label>
        <label>
          Public:
          <input
            id="public"
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
