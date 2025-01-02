"use client";
import {
  CircularProgress,
  Avatar,
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import axios from "@node_modules/axios";
import { useSession } from "@node_modules/next-auth/react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify"; // Import the Bounce transition if it's provided by your toast library
import "react-toastify/dist/ReactToastify.css";
import KycModal from "./kycModal";

const KYCPage = () => {
  const { data: session, status } = useSession();
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSubmit = async () => {
    if (!image) {
      toast.error("Image is Required", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post("/api/upload/kyc", {
        image: image,
      });
      toast.success("Deposit Successful", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setImage("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <Box sx={{ background: "#242731" }} className="px-4 py-20 rounded-xl">
        <Typography className="text-4xl font-extrabold">
          Hii, {session?.user?.username}
        </Typography>
        <Typography className="mt-8">
          To ensure a secure and trustworthy environment for all our users, we
          kindly request you to submit your verification documents. Completing
          this process is quick and easy, and it helps us maintain the integrity
          of our platform. It only takes a few minutes to complete the
          verification process.
        </Typography>
        <Stack direction="row">
          <Typography className="py-2 px-2 mt-6 rounded-2xl bg-red-500">
            Not Verified
          </Typography>
          <div></div>
        </Stack>

        <Button
          onClick={() => setOpen(true)}
          className="text-white mt-3 py-3 px-3 rounded-2xl"
          sx={{ backgroundColor: "#3f3fc2 !important", flex: "1" }}
        >
          Click here to submit{" "}
        </Button>
      </Box>
      <KycModal open={open} setOpen={setOpen} />
    </>
   
  );
};

export default KYCPage;
