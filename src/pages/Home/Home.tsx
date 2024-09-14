import { Box, Typography } from "@mui/material";
import DummyProperties from "./DummyProperties.json";
import { memo } from "react";

const Home = () => {
  console.log(DummyProperties);
  return (
    <Box width="100%">
      <Box
        height="20rem"
        bgcolor={"red"}
        width={"100%"}
        marginTop={".4rem"}
      ></Box>
      <Box
        width="100%"
        padding={"1rem"}
        bgcolor={"lightgrey"}
        sx={{ opacity: "1" }}
      >
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={"1.5rem"} color={"black"}>
            More on For Rent: House & Apartments
          </Typography>
          <Typography
            sx={{
              textDecoration: "underline",
              fontWeight: "bold",
              ":hover": {
                textDecoration: "none",
                cursor: "pointer",
              },
            }}
          >
            View More
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Home);
