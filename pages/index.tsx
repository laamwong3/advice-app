import { Box, Stack } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Quote } from "./api/quote";
import background from "../images/city.jpeg";
import QuoteCard from "../components/QuoteCard";

const Home: NextPage = () => {
  return (
    <>
      <Box position="relative">
        <Box zIndex={-2} position="absolute" width="100vw" height="100vh">
          <Image src={background} objectFit="cover" layout="fill" />
        </Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
        >
          <QuoteCard />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
