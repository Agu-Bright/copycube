import React, { useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { borderRadius } from "@mui/system";

const UserVerificationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    sex: "",
    maritalStatus: "",
    idFront: null,
    idBack: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("address", formData.address);
    form.append("sex", formData.sex);
    form.append("maritalStatus", formData.maritalStatus);
    form.append("idFront", formData.idFront);
    form.append("idBack", formData.idBack);

    try {
      const response = await axios.post("/api/verify-id", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Verification submitted successfully!");
    } catch (error) {
      console.error("Error submitting verification", error);
      alert("Failed to submit verification.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#1f2937 " }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          User Verification
        </h2>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-300 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-300 font-medium mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-medium mb-2">Sex</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 font-medium mb-2">
            Marital Status
          </label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select</option>
            <option value="married">Married</option>
            <option value="single">Single</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="idFront"
            className="block text-gray-300 font-medium mb-2"
          >
            Upload ID (Front)
          </label>
          <input
            type="file"
            id="idFront"
            name="idFront"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="idBack"
            className="block text-gray-300 font-medium mb-2"
          >
            Upload ID (Back)
          </label>
          <input
            type="file"
            id="idBack"
            name="idBack"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "70vh",
  overflowY: "scroll",
  bgcolor: "#1f2937 ",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export default function KycModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UserVerificationForm />
        </Box>
      </Modal>
    </div>
  );
}
