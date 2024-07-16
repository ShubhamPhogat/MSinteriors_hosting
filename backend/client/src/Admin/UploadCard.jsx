import React, { useEffect, useState } from "react";
import { Card, Table, Button, message } from "antd";
import axios from "axios";
import "../styles/admin.css";

const UserDetailsCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user");
        setUsers(response.data);
      } catch (error) {
        message.error("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button danger onClick={() => deleteUser(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`https://ms-backend.vercel.app/api/user/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
      message.success("User deleted successfully.");
    } catch (error) {
      message.error("Failed to delete user.");
    }
  };

  return (
    <div className="admin-container">
    <Card title="User Details" className="w-full ">
      <Table
        dataSource={users}
        columns={columns}
        loading={loading}
        rowKey="_id"
      />
    </Card>
    </div>
  );
};

export default UserDetailsCard;
