"use client";
import React, { useContext } from "react";
import {
  Drawer,
  IconButton,
  Divider,
  Avatar,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
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
function SideBarDrawer({ open, close }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const root = pathname.split("/")[1];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={close}
      sx={{ "& .MuiDrawer-paper": { width: "60vw" } }}
    >
      <Box
        className="h-[100vh]"
        sx={{
          width: "100%",
          background: "linear-gradient(20deg,#0d0d0d,  #05286e, #0d0d0d)",
        }}
      >
        <div className="px-2 border-white">
          {root === "user" && (
            <ul className="mt-2" style={{ marginTop: "10px" }}>
              <AccordionUsage />
              <Divider sx={{ background: "rgba(95, 92, 92, 0.75)" }} />
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/investment" style={{ display: "flex" }}>
                  <Image
                    src="/img/donation.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Make a Deposit</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/withdrawal" style={{ display: "flex" }}>
                  <Image
                    src="/img/money-withdrawal.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Withdrawal</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/deposits" style={{ display: "flex" }}>
                  <Image
                    src="/img/check.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Acive Deposits</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/account_history" style={{ display: "flex" }}>
                  <Image
                    src="/img/dollar-symbol.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Account History</div>
                </Link>
              </li>
              {/* <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/deposit" style={{ display: "flex" }}>
                  <Image
                    src="/img/pie-chart.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Option Trade</div>
                </Link>
              </li> */}
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user" style={{ display: "flex" }}>
                  <Image
                    src="/img/bar-chart.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />

                  <div className="text-gray-300">Trading Dashboard</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/live-trading" style={{ display: "flex" }}>
                  <Image
                    src="/img/bar-chart.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Live Trading </div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/kyc" style={{ display: "flex" }}>
                  <Image
                    src="/img/hand-shake.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">KYC</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/user/faq" style={{ display: "flex" }}>
                  <Image
                    src="/img/chat.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">FAQ</div>
                </Link>
              </li>
              {/* <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3 mb-3`}
              >
                <Link href="/deposit" style={{ display: "flex" }}>
                  <Image
                    src="/img/support.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Support</div>
                </Link>
              </li> */}
            </ul>
          )}
          {root === "dashboard" && (
            <ul className="mt-2" style={{ marginTop: "10px" }}>
              <AccordionUsage />
              <Divider sx={{ background: "rgba(95, 92, 92, 0.75)" }} />
              <li
                className={`${
                  pathname === "/dashboard" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/dashboard" style={{ display: "flex" }}>
                  <Image
                    src="/img/donation.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Dashboard</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link
                  href="/dashboard/deposit-request"
                  style={{ display: "flex" }}
                >
                  <Image
                    src="/img/money-withdrawal.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Deposit Request</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link
                  href="/dashboard/withdrawal-request"
                  style={{ display: "flex" }}
                >
                  <Image
                    src="/img/check.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Withdrawal Request</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link href="/dashboard/users" style={{ display: "flex" }}>
                  <Image
                    src="/img/dollar-symbol.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Users</div>
                </Link>
              </li>
              <li
                className={`${
                  pathname === "/user" ? "active" : ""
                } text-white mt-3`}
              >
                <Link
                  href="/dashboard/payment-method"
                  style={{ display: "flex" }}
                >
                  <Image
                    src="/img/pie-chart.png"
                    alt="deposit"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="text-gray-300">Payment Methods</div>
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

            <li onClick={signOut} className="mt-5">
              <Link href="#" style={{ display: "flex" }}>
                <LogoutIcon sx={{ marginRight: "10px", color: "red" }} />{" "}
                <div style={{ color: "red" }}>Sign Out</div>
              </Link>
            </li>
          </ul>
        </div>
      </Box>
    </Drawer>
  );
}

export default SideBarDrawer;
