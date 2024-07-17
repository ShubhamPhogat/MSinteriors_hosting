import React, { useState } from "react";
import { Card, Input, message, Button } from "antd";
import "../styles/admin.css";

const UploadCard = () => {
  const [formData, setFormData] = useState({
    type: "",
    src: "",
    description: "",
    color: "",
    finish: "",
    theme: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        message.success("Image added successfully.");
        console.log("Added image:", data);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      message.error("Failed to add image: " + error.message);
    }
  };

  return (
    <div className="admin-container">
      <Card title="Add Image" className="upload-card">
      <Input
          placeholder="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="mt-2"
        />
        <Input
          placeholder="Image URL"
          name="src"
          value={formData.src}
          onChange={handleChange}
          className="mt-2"
        />
        <Input
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-2"
        />
        <Input
          placeholder="Color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="mt-2"
        />
        <Input
          placeholder="Finish"
          name="finish"
          value={formData.finish}
          onChange={handleChange}
          className="mt-2"
        />
        <Input
          placeholder="Theme"
          name="theme"
          value={formData.theme}
          onChange={handleChange}
          className="mt-2"
        />
        <Button type="primary" onClick={handleSubmit} className="submit-button">
          Submit
        </Button>
      </Card>
    </div>
  );
};

export default UploadCard;
