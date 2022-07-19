import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import useSWR from "swr";
import { Quote } from "../pages/api/quote";
import { animate, motion, Variants } from "framer-motion";

export default function QuoteCard() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { mutate, data: quote } = useSWR<Quote>("/api/quote", fetcher);

  const variantCard: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      transition: { duration: 3 },
      opacity: 1,
    },
  };
  const variantButton: Variants = {
    hover: {
      scale: 1.3,
      transition: {
        duration: 0.4,
        // repeat: Infinity,
      },
    },
  };

  return (
    <Card
      component={motion.div}
      variants={variantCard}
      initial="hidden"
      animate="visible"
      sx={{ width: 500, backgroundColor: "#001a33" }}
    >
      <CardActionArea onClick={() => mutate()}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontFamily: "Montserrat" }}
            textAlign="center"
          >
            Quote of the day
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontFamily: "Montserrat" }}
            textAlign="center"
          >
            {quote && quote.slip?.advice}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          direction: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Montserrat",
        }}
      >
        <Button
          component={motion.button}
          variants={variantButton}
          whileHover="hover"
          onClick={() => mutate()}
        >
          Next Quote
        </Button>
      </CardActions>
    </Card>
  );
}
