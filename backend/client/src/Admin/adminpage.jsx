import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd"; // Import Card from Ant Design
import "../styles/admin.css";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleUserDetailsClick = () => {
    navigate("/UserDetailsCard");
  };

  const handleUploadClick = () => {
    navigate("/UploadCard");
  };

  return (
    <div className="admin-container w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-400 to-purple-600">
      <div className="max-w-2xl w-full bg-white p-8 shadow-lg rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
          Admin Dashboard
        </h1>
        <div className="mt-6 flex flex-wrap gap- justify-center">
          <Card
            className="cursor-pointer"
            onClick={handleUserDetailsClick}
            hoverable
            title="User Details"
            style={{ width: 300 }}
          >
            <p>Click to view user details</p>
          </Card>
          <br />
          <Card
            className="cursor-pointer"
            onClick={handleUploadClick}
            hoverable
            title="Upload"
            style={{ width: 300 }}
          >
            <p>Click to upload files</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
