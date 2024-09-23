import React, { FC } from "react";
import { Property } from "../../helper/Types";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

interface IProps {
  datas: Property;
}
const IndividualProperties: FC<IProps> = ({ datas }) => {
  return (
    <Grid item xs={3}>
      <Box
        sx={{
          ":hover": {
            backgroundColor: "#f0f0f0",
            transform:'scale(1.1)'
          },
        }}
        border={"1px solid gray"}
        padding={"0.5rem"}
        borderRadius={"10px"}
      >
        <img
          src={datas?.image}
          alt="ff"
          style={{ height: "10rem", width: "100%" }}
        />
        <Stack direction="column" spacing={1}>
          <Typography
            fontWeight={"600"}
            fontSize={"1.5rem"}
            display="flex"
            alignItems={"center"}
          >
            <CurrencyRupeeIcon /> {datas?.price}
          </Typography>
          <Typography fontWeight={"400"} fontSize={"1rem"}>
            {datas?.name} -{datas?.area}
          </Typography>
          <Typography>
            {datas?.description?.length > 23
              ? datas?.description.slice(0, 23) + "..."
              : datas?.description}
          </Typography>
          <Typography>
            <span style={{ fontWeight: "bold" }}> Date Posted -</span>{" "}
            {datas?.datePosted}
          </Typography>
        </Stack>
      </Box>
    </Grid>
  );
};

export default IndividualProperties;
