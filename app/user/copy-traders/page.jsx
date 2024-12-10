"use client";
import React from "react";
import NavPage from "@components/navPage/NavPage";
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { RestaurantContext } from "@context/RestaurantContext";
import Card from "@components/Card";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TraderCard from "@components/TraderCard";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const { myWallet, formatMoney, setSideBar2, setGlobalCat } =
    useContext(RestaurantContext);
  const [active, setActive] = useState(null);

  const [traders, setTraders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/get-traders");
        setTraders(data?.traders);
        setLoading(false);
      } catch (error) {
        console.log("cant get traders");
        setLoading(false);
      }
    })();
  }, []);

  if (status === "loading") {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#161722",
        }}
      >
        <CircularProgress style={{ color: "white" }} />
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/user/login");
  } else
    return (
      <NavPage>
        <Box sx={{ height: "100%" }}>
          <Stack direction="column" justifyContent="space-between">
            <Box className="flex align-middle ">
              <Image
                src="/img/check.png"
                alt="deposit"
                width={50}
                height={50}
                className="mr-2"
              />
              <Typography className="text-white text-4xl font-extrabold">
                Expert Traders{" "}
              </Typography>
            </Box>
            <Box className="w-[100%] mt-4">
              <Typography>
                The Grin blockchain has presented significant technical
                challenges
              </Typography>

              {active === null && (
                <>
                  {loading && (
                    <Box
                      sx={{
                        width: "100%",
                        height: "70vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CircularProgress size={20} sx={{ color: "white" }} />
                    </Box>
                  )}
                  {!loading && traders.length === 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          width: "50%",
                          height: "70vh",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Image
                          src="/img/empty.png"
                          alt="empty"
                          width={200}
                          height={200}
                        />
                        <Typography className="text-white">
                          You currently have not uploaded any trader
                        </Typography>
                        <Button className="mt-8" onClick={() => setOpen(true)}>
                          Create Trader
                        </Button>
                      </Box>
                    </Box>
                  )}
                  {traders.length > 0 && (
                    <Box>
                      <Box sx={{ width: "100%" }}>
                        <Grid
                          container
                          rowSpacing={2}
                          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                          {traders.map((item) => (
                            <Grid item xs={6} md={3}>
                              <TraderCard
                                key={item?._id}
                                trader={item}
                                setActive={setActive}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Box>
                  )}
                </>
              )}
              {active && <Box>hii</Box>}
            </Box>
          </Stack>
        </Box>
      </NavPage>
    );
}
