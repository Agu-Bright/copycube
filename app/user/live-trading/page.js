"use client";
import NavPage from "@components/navPage/NavPage";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";
import Image from "next/image";
import { RestaurantContext } from "@context/RestaurantContext";
import TradingViewWidget from "@components/TradingViewWidget";
import TradingPairWidget from "@components/TradingPairWidget";
import MyOrder from "@components/MyOrder";
import Buy from "@components/Buy";
import MarketNews from "@components/MarketNews";
import TradingViewTicker from "./widget";
import MarketTradesTable from "./table";
import TradingDashboard from "./tradingDash";
import OrderBook from "./orderBook";

const Topic = ({ title, src }) => {
  return (
    <div>
      <Image src={src} alt="img" width={30} height={30} />
      <span style={{ marginLeft: "10px" }}>{title}</span>
    </div>
  );
};

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

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
        <CircularProgress className="text-gray-400" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/user/login");
  } else
    return (
      <NavPage>
        <Box sx={{ height: "100%", width: "100%", paddingBottom: "15px" }}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Box sx={{ width: "100%", height: "80vh", overflowY: "scroll" }}>
              <TradingViewTicker />
              <TradingDashboard />
              <Box sx={{ width: "100", overflow: "hidden" }}>
                <MarketTradesTable />
              </Box>
            </Box>
          </Stack>
        </Box>
      </NavPage>
    );
}
