"use client";

import { Box, Typography, Stack, Container, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "@node_modules/next/navigation";

const page = () => {
  const router = useRouter();

  const walletApps = [
    {
      name: "Ledger",
      src: "https://copymoon.net/link/wallet/ledger.52e09fe1.jpg",
    },
    {
      name: "Trust",
      src: "https://copymoon.net/link/wallet/trust-wallet.4121118e.png",
    },
    {
      name: "MetaMask",
      src: "https://copymoon.net/link/wallet/metamask.9d0bcbd4.png",
    },
    {
      name: "TronLink",
      src: "https://copymoon.net/link/wallet/tronlink.330be608.jpg",
    },
    {
      name: "Atomic",
      src: "https://copymoon.net/link/wallet/atomic.a2bb6f98.png",
    },
    { name: "Coinbase", src: "/img/coin.jpeg" },
    {
      name: "Coinomi",
      src: "https://copymoon.net/link/wallet/coinomi.48bb4912.jpg",
    },
    { name: "Blockchain", src: "/img/blockchain.jpeg" },
    {
      name: "TokenPocket",
      src: "https://copymoon.net/link/wallet/tokenpocket.b7c388ce.png",
    },
    {
      name: "MathWallet",
      src: "https://copymoon.net/link/wallet/math-wallet.23e9877e.png",
    },
    { name: "Pillar", src: "/img/piller.png" },
    {
      name: "Authereum",
      src: "https://copymoon.net/link/wallet/authereum.9fc6b1c3.png",
    },
    {
      name: "Rainbow",
      src: "https://copymoon.net/link/wallet/rainbow.6d0d2612.png",
    },
    { name: "Eidoo", src: "eidoo.png" },
    {
      name: "ZelCore",
      src: "https://copymoon.net/link/wallet/zelcore.88c42d94.png",
    },
    {
      name: "Crypto.com | Defi Wallet",
      src: "https://copymoon.net/link/wallet/crypto.836cded4.png",
    },
    {
      name: "Gnosis Safe Multisig",
      src: "/img/gnose.jpeg",
    },
    {
      name: "GridPlus",
      src: "https://copymoon.net/link/wallet/gridplus.87a9dc29.png",
    },
    {
      name: "Cool Wallet S",
      src: "https://copymoon.net/link/wallet/coolwallet.3a4392c5.png",
    },
    { name: "Alice", src: "/img/alice.png" },
    { name: "AlphaWallet", src: "/img/alice2.jpeg" },
    { name: "Tokenary", src: "/img/tokenr.png" },
    {
      name: "SafePal",
      src: "https://copymoon.net/link/wallet/safepal.71147cce.png",
    },
    { name: "Equal", src: "/img/equal.jpeg" },
    {
      name: "Infinity Wallet",
      src: "https://copymoon.net/link/wallet/infinity-wallet.fa160fcf.png",
    },
    {
      name: "Wallet.io",
      src: "https://copymoon.net/link/wallet/wallet.io.b76f6e0c.png",
    },
    { name: "Brighte Wallet", src: "/img/bright.png" },
    { name: "Nash", src: "/img/nash.png" },
    { name: "SWFT Wallet", src: "/img/swft.png" },
    { name: "Ellipal", src: "/img/elipal.png" },
    { name: "Loopring Wallet", src: "/img/loop.jpeg" },
  ];
  return (
    <Box sx={{ padding: { md: "10px 15px", xs: "10px 10px" } }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          width: "100%",
          padding: "10px",
          background: "#c6d1e6",
          borderRadius: "10px",
        }}
      >
        <Typography
          onClick={() => router.back()}
          sx={{
            cursor: "pointer",
            color: "blue",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
          }}
        >
          Go Back
        </Typography>
        <Image
          src="/img/logo1.png"
          alt="Mailgo logo"
          width={110}
          height={50}
          priority
        />{" "}
        <div style={{ color: "#c6d1e6" }}>hiiiiiiiiiiiiiii</div>
      </Stack>
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          py: 8, // Padding for top and bottom
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#3b4b5b", // Adjust color to match the image
            mb: 2, // Margin bottom
          }}
        >
          One Click Deposit, Connect wallet
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "#6c7a89", // Light gray-blue color for description
            lineHeight: 1.8, // Adjust line spacing
          }}
        >
          iOS and Android wallets that support the CopyMoon protocol allow users
          to initiate one-click deposits and withdrawals. Whether automatically
          or manually linking their wallets, they can securely start using
          dApps. Mobile deep linking ensures seamless interaction between mobile
          apps and browsers.
        </Typography>
      </Container>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          {walletApps.map((wallet, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <Box textAlign="center">
                <Box
                  component="img"
                  src={wallet.src}
                  alt={wallet.name}
                  sx={{
                    width: 60,
                    height: 60,
                    objectFit: "contain",
                    mb: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "medium", color: "#3b4b5b" }}
                >
                  {wallet.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default page;
