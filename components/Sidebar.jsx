"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Person2Icon from "@mui/icons-material/Person2";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GavelIcon from "@mui/icons-material/Gavel";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Box, Typography, Stack, Divider } from "@mui/material";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { RestaurantContext } from "@context/RestaurantContext";

const AccordionUsage = () => {
  const { myWallet, formatMoney } = useContext(RestaurantContext);
  const { data: session } = useSession();
  return (
    <div>
      <Accordion
        sx={{
          background: "transparent",
          boxShadow: "none",
          color: "white",
          padding: "0px",
          margin: "0px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Stack direction="column">
            <Typography className="text-white">
              {formatMoney(myWallet?.balance) || 0.0}
            </Typography>{" "}
            <Typography
              sx={{ fontSize: "11px", color: "rgba(255,255,255,.75)" }}
            >
              Account Balance
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className="text-sm"
            sx={{ color: "rgba(255,255,255,.75)" }}
          >
            {session?.user?.email}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Sidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const root = pathname.split("/")[1];
  return (
    <>
      <Box
        className="h-[92.3vh] rounded-xl"
        sx={{
          width: "20%",
          display: { md: "block", xs: "none" },
          background: "linear-gradient(20deg,#1F2128,  #1F2128, #0d0d0d)",
        }}
      >
        <div className="px-5 border-white">
          {root === "user" && (
            <ul className="mt-2" style={{ marginTop: "10px" }}>
              <AccordionUsage />
              <Divider sx={{ background: "rgba(95, 92, 92, 0.75)" }} />
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user" style={{ display: "flex" }}>
                  <Image
                    src="/img/dashboard.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Home</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/copy-traders" style={{ display: "flex" }}>
                  <Image
                    src="/img/bar-chart.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Copy Traders</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/copy-trading" style={{ display: "flex" }}>
                  <Image
                    src="/img/bar-chart.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Copy Trading</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/live-trading" style={{ display: "flex" }}>
                  <Image
                    src="/img/dollar-symbol.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Live Trading</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/transactions" style={{ display: "flex" }}>
                  <Image
                    src="/img/pie-chart.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Transactions</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/ranking" style={{ display: "flex" }}>
                  <Image
                    src="/img/bar-chart.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />

                  <div className="text-gray-300">Ranking</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/kyc" style={{ display: "flex" }}>
                  <Image
                    src="/img/bar-chart.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Kyc Verification </div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/2fa" style={{ display: "flex" }}>
                  <Image
                    src="/img/hand-shake.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">2FA</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/login-history" style={{ display: "flex" }}>
                  <Image
                    src="/img/hand-shake.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Login History</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/settings" style={{ display: "flex" }}>
                  <Image
                    src="/img/hand-shake.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Settings</div>
                </Link>
              </li>
            </ul>
          )}
          {root === "dashboard" && (
            <ul style={{ marginTop: "10px" }}>
              <li className={`${pathname === "/dashboard" ? "active" : ""}`}>
                <Link href="/dashboard" style={{ display: "flex" }}>
                  <HomeIcon sx={{ marginRight: "10px" }} /> <div>Dashboard</div>
                </Link>
              </li>

              <li
                className={`${
                  pathname === "/dashboard/upload-logs" ? "active" : ""
                }`}
              >
                <Link href="/dashboard/upload-logs" style={{ display: "flex" }}>
                  <HomeRepairServiceIcon sx={{ marginRight: "10px" }} />{" "}
                  <div>Manage Logs</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/dashboard/upload-logs" ? "active" : ""
                }`}
              >
                <Link href="/dashboard/orders" style={{ display: "flex" }}>
                  <ProductionQuantityLimitsIcon sx={{ marginRight: "10px" }} />{" "}
                  <div>Orders</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/dashboard/upload-logs" ? "active" : ""
                }`}
              >
                <Link href="/dashboard/users" style={{ display: "flex" }}>
                  <PersonIcon sx={{ marginRight: "10px" }} /> <div>users</div>
                </Link>
              </li>
            </ul>
          )}

          <ul>
            {/* <li className={pathname === "/dashboard-profile" ? "active" : ""}>
              <Link href="/dashboard-profile">
                <i className="flaticon-male"></i> Restaurant Profile
              </Link>
            </li> */}
            {session?.user?.role === "admin" && root === "dashboard" && (
              <li
                className={
                  pathname === "/dashboard/payment-method" ? "active" : ""
                }
              >
                <Link href="/dashboard/payment-method">
                  <i className="flaticon-list-1"></i> Payment Method
                </Link>
              </li>
            )}

            <li onClick={signOut}>
              <Link href="#" style={{ display: "flex" }} className="mt-5">
                <LogoutIcon sx={{ marginRight: "10px", color: "red" }} />{" "}
                <div style={{ color: "red" }}>Sign Out</div>
              </Link>
            </li>
          </ul>
          {session?.user?.role === "admin" && (
            <ul style={{ marginTop: "25px", border: "none" }}>
              <li>
                <Link
                  href={`${root === "dashboard" ? "/user" : "/dashboard"}`}
                  style={{
                    display: "flex",
                    border: "1px solid white",
                    width: "90%",
                    borderRadius: "10px",
                  }}
                >
                  <DashboardIcon
                    sx={{ marginRight: "10px", color: "#8075ff" }}
                  />{" "}
                  <div style={{ color: "white" }}>
                    {root === "dashboard" ? "User Section" : "Dashboard"}
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </Box>
    </>
  );
};

export default Sidebar;
